import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, HostListener, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2, Type, ViewContainerRef } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { GlobalFunctionService } from '../../core/global-fun.service';
import { checkVaidDep } from '../check-parent';
import { CheckboxBoxComponent } from './checkbox-box/checkbox-box.component';
import { DateBoxComponent } from './date-box/date-box.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ConfigInput, Field, FUNCTION_TYPE, ValidationType } from './field.interface';
import { FileBoxComponent } from './file-box/file-box.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { LabelBoxComponent } from './label-box/label-box.component';
import { RadioBoxComponent } from './radio-box/radio-box.component';
import { SelectBoxComponent } from './select-box/select-box.component';

const components: { [type: string]: Type<Field> } = {
  // button: FormButtonComponent,
  date: DateBoxComponent,
  input: InputBoxComponent,
  select: SelectBoxComponent,
  radio: RadioBoxComponent,
  checkbox: CheckboxBoxComponent,
  file: FileBoxComponent,
  dialog: DialogBoxComponent,
  label: LabelBoxComponent,

};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit, AfterViewInit, OnDestroy, AfterContentChecked {
  @Input()
  config: ConfigInput;

  @Input()
  group: FormGroup;

  @Input()
  index: number

  @Input()
  editStage: boolean = false
  i = 0
  @Output() onEdit = new EventEmitter<number>();

  @Input() divBreaked: any = []
  @Input() internalConfig: ConfigInput[] = []

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef,
  ) { }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
      this.component.instance.internalConfig = this.internalConfig;
      if (this.editStage) {
        if (this.config.break === "true") {
          let element: HTMLElement = <HTMLElement>this.component.location.nativeElement;
          let w = element.parentElement.getElementsByClassName("custom" + this.config.name)
          if (w.length > 0) {
            for (let index = 0; index < w.length; index++) {
              element.parentNode.removeChild(w[index]);
            }
          }
          // if (w.length === 0) {
          element.insertAdjacentHTML("beforebegin", "<div class='w-100 custom" + this.config.name + "'></div>");
          // }
        }
      }
    }
  }

  ngOnDestroy() {
    // if (this.editStage) {
    if (this.component) {
      this.divBreaked.forEach(item => {
        let element: HTMLElement = <HTMLElement>this.component.location.nativeElement;
        if (item.break === "true") {
          let w = element.parentElement.getElementsByClassName("custom" + item.name)
          for (let index = 0; index < w.length; index++) {
            element.parentNode.removeChild(w[index]);
          }
        }
      });
    }

  }

  ngOnInit() {
    console.log("CONFIG",this.config);
    
    // this.config.show = this.config.input == "label" ? true : this.config.show
    if (this.config.show || this.editStage) {
      if (!components[this.config.input]) {
        const supportedTypes = Object.keys(components).join(', ');
        throw new Error(
          `Trying to use an unsupported type (${this.config.input}).
        Supported types: ${supportedTypes}`
        );
      }
      const componetText = this.config.input == 'input' && this.config.type == 'nrc' ? 'dialog' : this.config.input
      const component = this.resolver.resolveComponentFactory<Field>(components[componetText]);
      this.component = this.container.createComponent(component);
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
      this.component.instance.internalConfig = this.internalConfig;
      if (this.config.input == 'input' && this.config.type == 'nrc') {
        this.component.instance.isNrc = true
        this.component.instance.editStage = this.editStage
      }
      if (this.config.input == 'dialog' || this.config.input == 'file') {
        this.component.instance.editStage = this.editStage
      }
      let element: HTMLElement = <HTMLElement>this.component.location.nativeElement;
      element.classList.toggle(`col-xs-${this.config.size}`);
      element.classList.toggle(`col-sm-${this.config.mdSize}`);
      element.classList.toggle(`col-lg-${this.config.mdSize}`);

      if (!this.editStage && this.config.input != "label") {
        this.component.instance.doFunction()
        if (this.config.dependency) {
          if (!this.checkDep(this.config.dependency)) {
            element.classList.add(`show-off`);
          }
        }

      }

      if (this.editStage === true) {
        this.renderer.listen(this.component.location.nativeElement, 'click', (event) => { this.clickedEvent(); });
      }
      if (this.config.break === "true") {
        // element.classList.toggle(`align-self-start`);
        let w = element.parentElement.getElementsByClassName("custom" + this.config.name)
        if (w.length === 0) {
          element.insertAdjacentHTML("beforebegin", "<div class='w-100 custom" + this.config.name + "'></div>");
        }
      }
      else {
        let w = element.parentElement.getElementsByClassName("custom" + this.config.name)
        if (w.length > 0) {
          element.parentNode.removeChild(w[0]);
        }
      }
    }
  }

  checkDep(dependency) {
    return checkVaidDep(dependency, this.group)
  }

  clickedEvent() {
    if (this.editStage === true) {
      this.onEdit.emit(this.index)
    }
  }

  ngAfterContentChecked() {
    // this.cdRef.detectChanges();
    if (!this.editStage && this.config.show && this.config.input != "label") {
      if (this.config.dependency) {
        let element: HTMLElement = <HTMLElement>this.component.location.nativeElement;
        if (this.checkDep(this.config.dependency)) {
          if (this.config.master == 'true') {
            let dependency = this.config.dependency
            this.component.instance.reGetOption(this.group.getRawValue()[dependency.parentName])
          }
          element.classList.remove(`show-off`);
          if (this.component.instance.group) {
            this.component.instance.group.controls[this.config.name].setValidators(null)
            let valid = []
            if (this.config.validation) {
              let validation = this.config.validation
              for (let val of validation) {
                if (val.type == ValidationType.REQUIRED) {
                  valid.push(Validators.required)
                } else if (val.type == ValidationType.MAX && this.config.type != 'date') {
                  let validat = this.config.type == 'number' ? Validators.max(val.value) : Validators.maxLength(val.value)
                  valid.push(validat)
                } else if (val.type == ValidationType.MIN && this.config.type != 'date') {
                  let validat = this.config.type == 'number' ? Validators.max(val.value) : Validators.maxLength(val.value)
                  valid.push(validat)
                }
              }
            }
            if (this.config.input == 'input' && this.config.type == 'email') {
              valid.push(Validators.email)
            }
            this.component.instance.group.controls[this.config.name].setValidators(valid)
            this.component.instance.group.controls[this.config.name].updateValueAndValidity()
          }
        } else {
          if (this.component.instance.group) {
            this.component.instance.group.controls[this.config.name].setValue("")
            this.component.instance.group.controls[this.config.name].setValidators(null)
            this.component.instance.group.controls[this.config.name].updateValueAndValidity()
          }
          element.classList.add(`show-off`);
        }
      }
    }
  }



}

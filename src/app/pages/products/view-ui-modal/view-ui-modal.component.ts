import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Wizard1Component } from '../../../wizards/wizard1/wizard1.component';
import { Wizard2Component } from '../../../wizards/wizard2/wizard2.component';
import { Wizard3Component } from '../../../wizards/wizard3/wizard3.component';
import { Wizard4Component } from '../../../wizards/wizard4/wizard4.component';
import { FormUIService } from '../../dashboard/services/form-ui.service';

const components: { [type: string]: Type<any> } = {
  // button: FormButtonComponent,
  ui1: Wizard1Component,
  ui2: Wizard2Component,
  ui3: Wizard3Component,
  ui4: Wizard4Component,
}
@Component({
  selector: 'app-view-ui-modal',
  templateUrl: './view-ui-modal.component.html',
  styleUrls: ['./view-ui-modal.component.scss'],
})
export class ViewUIModalComponent implements OnInit, OnDestroy {
  selectedUI: string = "ui1"
  @ViewChild('dynamicTemplate', { read: ViewContainerRef }) dynamicTemplate: ViewContainerRef;

  constructor(public modal: NgbActiveModal, private cdRef: ChangeDetectorRef, private uiService: FormUIService, private resolver: ComponentFactoryResolver, private container: ViewContainerRef,) { }

  ngOnInit() {
    // console.log(components[this.selectedUI]);
  }

  // ngAfterViewInit(){
  //   if (components[this.selectedUI]) {
  //     const component = this.resolver.resolveComponentFactory(components[this.selectedUI]);
  //     this.dynamicTemplate.createComponent(component)
  //   }
  // }

  ngOnDestroy() { }

  radioChange(event: MatRadioChange) {
    if (components[event.source.value]) {
      const component = this.resolver.resolveComponentFactory(components[event.source.value]);
      this.dynamicTemplate.clear();
      this.dynamicTemplate.createComponent(component)
    }
  }

  save() {
    this.modal.dismiss({ type: 'save', data: this.selectedUI })
  }
  show() {
    if (components[this.selectedUI]) {
      const component = this.resolver.resolveComponentFactory(components[this.selectedUI]);
      this.dynamicTemplate.clear();
      this.dynamicTemplate.createComponent(component)
    }
  }


}

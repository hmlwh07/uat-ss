import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BtnConfig, Field } from '../field.interface';

@Component({
  selector: '[app-button-box]',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.scss']
})
export class ButtonBoxComponent implements OnInit{
  @Input() config: BtnConfig;
  @Input() index: number;
  @Input() editStage: Boolean = true
  @Output() eventE = new EventEmitter<string>();
  constructor(private el: ElementRef) {
    
  }

  //wait for the component to render completely
  ngOnInit() {
   
  }

  onClick() {
    if (this.editStage) {
      this.eventE.emit(this.index + "");
    } else {
      this.eventE.emit(this.config.type)
    }
  }
}

import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BtnConfig, ConfigInput, Field } from '../field.interface';

@Component({
  selector: '[app-label-box]',
  templateUrl: './label-box.component.html',
  styleUrls: ['./label-box.component.scss']
})
export class LabelBoxComponent implements OnInit{
  group: FormGroup;
  config: any
  constructor() { }

  ngOnInit(){
    this.config.labelSize = this.config.labelSize || 1
    this.config.endLabel = this.config.endLabel || "rem"
    this.config.endLabelMM = this.config.endLabelMM || "normal"
  }
}

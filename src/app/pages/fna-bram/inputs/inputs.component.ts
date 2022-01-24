import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  @Input() fnaId: number = null;
  @Output() changeSwitch: EventEmitter<string> = new EventEmitter<string>();
  inputSwitch: string = 'aboutBRAM';
  menuSwitch: string = 'inbound-logistics';

  constructor() { }

  ngOnInit(): void {
  }

  fnaSwitchEvent(type) {
    this.inputSwitch = type;
    this.changeSwitch.emit(type);
  }

  inputSwitchEvent(type) {
    this.menuSwitch = type;
  }

  fnaBramEvent(type){

  }

  

}

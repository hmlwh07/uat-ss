import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-config-modal',
  templateUrl: './input-config-modal.component.html',
  styleUrls: ['./input-config-modal.component.scss'],
})
export class InputConfigModalComponent implements OnInit, OnDestroy {
  inputData = {}
  constructor(public modal: NgbActiveModal, private cdRef: ChangeDetectorRef,) { }

  ngOnInit() {
// console.log(Object.keys(this.inputData));

  }

  ngOnDestroy() { }

  save() {
    this.modal.dismiss({ type: 'save', data: this.inputData })
  }

  get InputArry(){
    return Object.keys(this.inputData)
  }

  changeCheck(key,event){
    if(event.target.checked){
      this.inputData[key] = 1
    }else{
      this.inputData[key] = 0
    }
    
  }

  changeCheckRead(key,event){
    if(event.target.checked){
      this.inputData[key] = 2
    }else{
      this.inputData[key] = 1
    }
    
  }

  changeCheckReadByRef(key,event){
    if(event.target.checked){
      this.inputData[key] = 3
    }else{
      this.inputData[key] = 1
    }
    
  }



}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chart-analysis',
  templateUrl: './chart-analysis.component.html',
  styleUrls: ['./chart-analysis.component.scss']
})
export class ChartAnalysisComponent implements OnInit {
  formGroup: FormGroup;
  fnaSwitch: string = 'aboutLLP';
  selected: string = '';
  productSwitch:string = 'product';
  constructor(private fb: FormBuilder) { 
   
  }

  ngOnInit(): void {
   this.loadForm(); 
  }

  switchEvent(type){
    this.selected = type;
  }

  backAction(){
    this.selected = ''; 
  }

  fnaSwitchEvent(type){
    this.fnaSwitch = type;  
    this.productSwitch = type; 
    if(type == 'product'){

    }else{

    }
  }

  previous(type){
   this.fnaSwitch = type;
  }

  saveProduct(type){
    this.productSwitch = type;
   }

   loadForm() {
    this.formGroup = this.fb.group({
      isAllowBackDate: [null, Validators.compose([Validators.required, Validators.nullValidator])],
      
    });
   

  }

}

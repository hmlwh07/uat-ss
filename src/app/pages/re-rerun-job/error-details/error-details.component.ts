import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-details',
  templateUrl: './error-details.component.html',
  styleUrls: ['./error-details.component.scss'],
})
export class ErrorDetailsComponent implements OnInit {
  @Input() data;
  constructor(private ngModal: NgbActiveModal) { }

  ngOnInit() { 
    // console.log(this.data);
    this.data.errorDescription = (this.data.logMsg + "").split(',')
    
  }

  closeModal() {
    this.ngModal.dismiss()
  }

  reRun(){
    this.ngModal.dismiss({ type: 'rerun' })
    
  }

}

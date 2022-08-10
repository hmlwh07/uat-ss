import { Component, OnInit, Input, OnChanges, ElementRef, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  constructor(private alertService:AlertService) { }

  @Output()
  emitter = new EventEmitter<any>();

  @Input()
  data: any = {};

  @Input() viewBtn: any = {}
 
  ngOnInit(): void {
    
   }

  onActionEdit() {
    this.emitter.emit({
      cmd: "edit",
      data: this.data,
    });
  }

  onActionView() {
    this.emitter.emit({
      cmd: "view",
      data: this.data,
    });
  }

  ngOnDestroy() {
    this.emitter.unsubscribe();
  }

  onActionDelete() {
    this.emitter.emit({
      cmd: "delete",
      data: this.data,
    });
  }
  onActionDownload() {
    // if(this.data.fileName != null){

      this.emitter.emit({
        cmd: "download",
        data: this.data,
      });
    }
  //   else{
  //     this.alertService.activate('There is no document to download', 'Warning')
  //     .then(async (result) => {
  //       if (result) {
       
  //       }
  //     });
  //   }
  // }
  onActionRerun(){
    this.emitter.emit({
      cmd: "rerun",
      data: this.data,
    });
  }
  onActionConfirm() {
    this.emitter.emit({
      cmd: "confirm",
      data: this.data,
    });
  }
}

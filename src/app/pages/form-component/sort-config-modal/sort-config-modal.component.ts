import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sort-config-modal',
  templateUrl: './sort-config-modal.component.html',
  styleUrls: ['./sort-config-modal.component.scss'],
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will w  ant to provide your main App Module
})
export class SortConfigModalComponent implements OnInit, OnDestroy {

  showData: any[] = []
  type: string = "from"
  private subscriptions: Subscription[] = [];
  constructor(
    private fb: FormBuilder, public modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    //console.log(this.showData);
    
  }

  save() {
    this.modal.dismiss({ data: this.showData, type: 'save' })
  }



  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.showData, event.previousIndex, event.currentIndex);
  }

}

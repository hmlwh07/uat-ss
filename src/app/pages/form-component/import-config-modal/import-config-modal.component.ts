import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { FormUIService } from '../../dashboard/services/form-ui.service';
import { BtnConfig, ConfigInput } from '../field.interface';


@Component({
  selector: 'app-import-config-modal',
  templateUrl: './import-config-modal.component.html',
  styleUrls: ['./import-config-modal.component.scss'],
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will w  ant to provide your main App Module
})
export class ImportConfigModalComponent implements OnInit, OnDestroy {

  showData: any[] = []
  selectedRow: number
  private subscriptions: Subscription[] = [];
  constructor(
    private fb: FormBuilder, public modal: NgbActiveModal, private uiService: FormUIService, private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.uiService.getByType().toPromise().then((res: any) => {
      if (res) {
        this.showData = res.pages
        this.cdRef.detectChanges()
      }
    })
  }

  save() {
    if (this.selectedRow < 0)
      this.modal.dismiss({ data: false, listData: this.showData, type: 'save' })
    else
      this.modal.dismiss({ data: this.showData[this.selectedRow], listData: this.showData, type: 'save' })
  }

  selectRow(id: number) {
    this.selectedRow = this.selectedRow === id ? null : id;
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  delete(index: number) {
    this.showData.splice(index, 1)
  }

}

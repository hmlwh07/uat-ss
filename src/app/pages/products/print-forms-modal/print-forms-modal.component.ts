import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormUIService } from '../../dashboard/services/form-ui.service';
import { STATIS_PINRTS } from '../../static-print/static-print-const';
import { PrintFormat } from '../models/print-config.interface';


@Component({
  selector: 'app-print-forms-modal',
  templateUrl: './print-forms-modal.component.html',
  styleUrls: ['./print-forms-modal.component.scss'],
})
export class PrintFormsModalComponent implements OnInit, OnDestroy {

  listData: any[] = []
  selected: any[] = []
  staticPrints: PrintFormat[] = STATIS_PINRTS
  constructor(public modal: NgbActiveModal, private cdRef: ChangeDetectorRef, private uiService: FormUIService) { }

  ngOnInit() {
    this.listData.push(...this.staticPrints)
    this.selected = this.selected.filter(x => this.listData.findIndex(list => list.id == x.id) >= 0)
  }

  ngOnDestroy() { }

  save() {
    this.modal.dismiss({ type: 'save', data: this.selected })
  }

  toggleCheck(item) {
    if (this.ifChecked(item.id)) {
      let index = this.selected.findIndex(x => x.id == item.id)
      this.selected.splice(index, 1)
    } else {
      this.selected.push(item)
    }
    this.cdRef.detectChanges()
  }

  ifChecked(id) {
    let index = this.selected.findIndex(x => x.id == id)
    return index < 0 ? false : true
  }

  isAllCheck() {
    return this.selected.length == this.listData.length
  }

  selectAllRows() {
    this.selected = JSON.parse(JSON.stringify(this.listData))
  }

}

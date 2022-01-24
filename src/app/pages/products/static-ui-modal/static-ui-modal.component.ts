import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormUIService } from '../../dashboard/services/form-ui.service';
import { STATIC_PAGES } from '../../static-pages/static-pages.data';


@Component({
  selector: 'app-static-ui-modal',
  templateUrl: './static-ui-modal.component.html',
  styleUrls: ['./static-ui-modal.component.scss'],
})
export class StaticUIModalComponent implements OnInit, OnDestroy {

  listData: any[] = STATIC_PAGES
  selected: any[] = []
  constructor(public modal: NgbActiveModal, private cdRef: ChangeDetectorRef, private uiService: FormUIService) { }

  ngOnInit() {

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

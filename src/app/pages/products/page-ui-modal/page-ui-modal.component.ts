import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormUIService } from '../../dashboard/services/form-ui.service';


@Component({
  selector: 'app-page-ui-modal',
  templateUrl: './page-ui-modal.component.html',
  styleUrls: ['./page-ui-modal.component.scss'],
})
export class PageUIModalComponent implements OnInit, OnDestroy {

  listData: any[] = []
  selected: any[] = []
  constructor(public modal: NgbActiveModal, private cdRef: ChangeDetectorRef, private uiService: FormUIService) { }

  ngOnInit() { 

    this.getList()
  }

  ngOnDestroy() { }

  save() {
    this.modal.dismiss({ type: 'save', data: this.selected })
  }

  toggleCheck(item) {
    if (this.ifChecked(item.dyProductID)) {
      let index = this.selected.findIndex(x => x.dyProductID == item.dyProductID)
      this.selected.splice(index, 1)
    } else {
      this.selected.push(item)
    }
    this.cdRef.detectChanges()
  }

  ifChecked(dyProductID) {
    let index = this.selected.findIndex(x => x.dyProductID == dyProductID)
    return index < 0 ? false : true
  }

  isAllCheck() {
    return this.selected.length == this.listData.length
  }

  selectAllRows() {
    this.selected = JSON.parse(JSON.stringify(this.listData))
  }

  getList() {
    this.uiService.getByType().toPromise().then((res: any) => {
      //console.log(res);
      if (res) {
        this.listData = res.forms
        //console.log(this.listData);
        this.cdRef.detectChanges()
      }
    })
  }

}

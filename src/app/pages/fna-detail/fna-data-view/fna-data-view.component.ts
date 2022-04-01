import { Component, OnInit } from '@angular/core';
import { FNAConstant } from '../fna-constant';
import { FANService } from '../fna-manage.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fna-data-view',
  templateUrl: './fna-data-view.component.html',
  styleUrls: ['./fna-data-view.component.scss']
})
export class FnaDataViewComponent implements OnInit {
  type: string = "";
  fnaViews = [];
  fnaHealths = []
  fnaData: any;
  spouseProtection = true;
  title: string = null;
  estimatedMonthlyIncome: string;

  constructor(public modal: NgbActiveModal, private fnaService: FANService) {

  }

  ngOnInit(): void {
    if (this.type == 'Income' || this.type == "RetirementSaving") {
      this.fnaData = FNAConstant.FNA_DETAIL_OBJ;
      console.log('numberFormat', this.fnaData);
      if (this.type == "RetirementSaving") {
        this.title = 'Retirement Savings';
      } else {
        this.title = null;
      }
      if (this.type == 'Income') {
        console.log('numberFormat', this.mathRoundTo(Number(this.fnaData.estimatedMonthlyIncome), 2));
        this.estimatedMonthlyIncome = this.mathRoundTo(this.fnaData.estimatedMonthlyIncome, 2)
      } else {
        this.fnaData.dateOfBirth = this.formatDateMMDDYYYY(new Date(this.fnaData.dateOfBirth));
      }

    } else {
      this.fnaViews = FNAConstant.FNA_DETAIL_LIST;
      if (this.type == 'Health') {
        if (this.fnaViews[1].dateOfBirth != null && this.fnaViews[1].dateOfBirth.includes("-")) {
          this.fnaViews[1].dateOfBirth = this.formatDateMMDDYYYY(new Date(this.fnaViews[1].dateOfBirth));
        }
        this.fnaHealths = JSON.parse(JSON.stringify(FNAConstant.FNA_DETAIL_LIST));
        this.fnaHealths.splice(0, 1);
        this.fnaHealths.splice(0, 1);
        for (var i = 0; i < this.fnaHealths.length; i++) {
          if (this.fnaHealths[i].dateOfBirth != null && this.fnaHealths[i].dateOfBirth.includes("-")) {
            this.fnaHealths[i].dateOfBirth = this.formatDateMMDDYYYY(new Date(this.fnaHealths[i].dateOfBirth));
          }
        }
      }
      if (this.type == 'Education') {
        if (this.type == "Education") {
          this.title = 'Education Savings';
        } else {
          this.title = null;
        }
        for (var i = 0; i < this.fnaViews.length; i++) {
          this.fnaViews[i].educationExpense = Number(this.fnaViews[i].educationExpense);
        }
      }
    }
  }

  close() {
    this.modal.dismiss(null)
  }

  mathRoundTo(num: number, places: number) {
    const factor = 10 ** places;
    return (Math.round(num * factor) / factor).toLocaleString();
  };

  numberFormat(val, decimalPlaces) {
    var multiplier = Math.pow(10, decimalPlaces);
    return (Math.round(val * multiplier) / multiplier).toFixed(decimalPlaces);
  }

  formatDateYYYYMMDD(date) {
    var d = new Date(date.split("/").reverse().join("/")),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }

  formatDateDDMMYYY(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [day, month, year].join('/');
  }

  formatDateMMDDYYYY(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [day, month, year].join('/');
  }



}

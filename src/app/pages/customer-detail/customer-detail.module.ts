import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { RouterModule } from "@angular/router";
import { NgbActiveModal, NgbDatepickerModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { InlineSVGModule } from "ng-inline-svg";
import { CRUDTableModule } from "src/app/_metronic/shared/crud-table";
import { CustomerDetailComponent } from "./customer-detail.component";
import { CustomerDetailShareModule } from "./customer-detail.share.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbDatepickerModule,
    MatRadioModule,
    NgSelectModule,
    MatDatepickerModule,
    MatInputModule,
    CustomerDetailShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerDetailComponent,
      },
    ]),

  ],
  providers:[NgbActiveModal]
})
export class CustomerDetailModule { }
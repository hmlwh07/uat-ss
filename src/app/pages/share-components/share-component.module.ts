import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FormComponentModule } from "../form-component/form-component.module";
import { CommonListingComponent } from "../static-pages/common-list/common-list.component";
import { LeadItemComponent } from "./lead-item/lead-item.component";
import { ListingSortPipe } from "./listing-sort.pipe";

@NgModule({
  declarations: [ListingSortPipe,CommonListingComponent,LeadItemComponent],
  exports: [ListingSortPipe,CommonListingComponent,LeadItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    FormComponentModule,
  ],
  providers: []
})
export class SeniorLpDashboardModule { }

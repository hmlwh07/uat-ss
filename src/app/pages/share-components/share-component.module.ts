import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FormComponentModule } from "../form-component/form-component.module";
import { CommonListingComponent } from "../static-pages/common-list/common-list.component";
import { ActivityItemComponent } from "./activity-item/activity-item.component";
import { ApplicationItemComponent } from "./application-item/application-item.component";
import { CommonListComponent } from "./common-list/common-list.component";
import { CustomerItemComponent } from "./customer-item/customer-item.component";
import { LeadItemComponent } from "./lead-item/lead-item.component";
import { ListingDirective } from "./listing-directive";
import { ListingSortPipe } from "./listing-sort.pipe";
import { QuotationItemComponent } from "./quotation-item/quotation-item.component";

@NgModule({
  declarations: [
    ListingSortPipe,
    CommonListingComponent,
    ListingDirective,
    LeadItemComponent,
    ActivityItemComponent,
    CustomerItemComponent,
    ApplicationItemComponent,
    QuotationItemComponent,
    CommonListComponent
  ],
  exports: [
    ListingSortPipe,
    ListingDirective,
    CommonListingComponent,
    LeadItemComponent,
    ActivityItemComponent,
    CustomerItemComponent,
    ApplicationItemComponent,
    QuotationItemComponent,
    CommonListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    FormComponentModule,
  ],
  providers: []
})
export class ShareComponentModule { }

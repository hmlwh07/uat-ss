import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatMenuModule } from "@angular/material/menu";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { LanguageModule } from "src/app/modules/languages/languages.modules";
import { throwIfAlreadyLoaded } from "src/app/modules/loading-toast/module-import-guard";
import { CustomerListShareModule } from "../customer-list/customer-list.share.module";
import { FormComponentModule } from "../form-component/form-component.module";
import { NrcPopupPage } from "../form-component/nrc-popup/nrc-popup.page";
import { ListingsPagerComponent } from "../static-pages/pager/pager.component";
import { ActivityItemComponent } from "./activity-item/activity-item.component";
import { ApplicationItemComponent } from "./application-item/application-item.component";
import { CommonList2Component } from "./common-list/common-list.component";
import { CustomerItemComponent } from "./customer-item/customer-item.component";
import { LeadItemComponent } from "./lead-item/lead-item.component";
import { ListingDirective } from "./listing-directive";
import { ListingSortPipe } from "./listing-sort.pipe";
import { QuotationItemComponent } from "./quotation-item/quotation-item.component";

@NgModule({
  declarations: [
    ListingSortPipe,
    ListingDirective,
    LeadItemComponent,
    ActivityItemComponent,
    CustomerItemComponent,
    ApplicationItemComponent,
    QuotationItemComponent,
    CommonList2Component,
    ListingsPagerComponent,
    NrcPopupPage
  ],
  exports: [
    ListingSortPipe,
    ListingDirective,
    LeadItemComponent,
    ActivityItemComponent,
    CustomerItemComponent,
    ApplicationItemComponent,
    QuotationItemComponent,
    CommonList2Component,
    ListingsPagerComponent,
    NrcPopupPage
  ],
  entryComponents:[ 
    NrcPopupPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    // FormComponentModule,
    NgSelectModule,
    MatMenuModule,
    LanguageModule
  ],
  providers: []
})
export class ShareComponentModule {
  // @Optional() @SkipSelf() parentModule: CustomerListShareModule
  constructor() {
    // throwIfAlreadyLoaded(parentModule, 'CustomerListShareModule')
  }
 }

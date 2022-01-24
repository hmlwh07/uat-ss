import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { PagesRoutingModule } from './pages-routing.module';
import {
  NgbDropdownModule,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './_layout/layout.component';
import { ScriptsInitComponent } from './_layout/init/scipts-init/scripts-init.component';
import { HeaderMobileComponent } from './_layout/components/header-mobile/header-mobile.component';
import { AsideComponent } from './_layout/components/aside/aside.component';
import { FooterComponent } from './_layout/components/footer/footer.component';
import { HeaderComponent } from './_layout/components/header/header.component';
import { HeaderMenuComponent } from './_layout/components/header/header-menu/header-menu.component';
import { TopbarComponent } from './_layout/components/topbar/topbar.component';
import { ExtrasModule } from '../_metronic/partials/layout/extras/extras.module';
import { CoreModule } from '../_metronic/core';
import { SubheaderModule } from '../_metronic/partials/layout/subheader/subheader.module';
import { AsideDynamicComponent } from './_layout/components/aside-dynamic/aside-dynamic.component';
import { HeaderMenuDynamicComponent } from './_layout/components/header/header-menu-dynamic/header-menu-dynamic.component';
// import { ActivityManagementListComponent } from './activity-management-list/activity-management-list.component';
// import { ActivityManagementDetailComponent } from './activity-management-detail/activity-management-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FnaBramComponent } from './fna-bram/fna-bram.component';
import { AboutBramComponent } from './fna-bram/about-bram/about-bram.component';
import { InputsComponent } from './fna-bram/inputs/inputs.component';
import { OutputsComponent } from './fna-bram/outputs/outputs.component';
import { ProductComponent } from './fna-bram/product/product.component';
import { FnaTypeComponent } from './fna-list/fna-type/fna-type.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ScriptsInitComponent,
    HeaderMobileComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    HeaderMenuComponent,
    TopbarComponent,
    AsideDynamicComponent,
    HeaderMenuDynamicComponent,
    FnaTypeComponent,
    // AboutBramComponent,
    //InputsComponent,
    //OutputsComponent,
    //ProductComponent,
    //FnaBramComponent,
    //IncomeComponent,
    //HealthComponent,
    //AssetComponent,
    //EducationComponent,
    //RetirementComponent,
    //FreedomComponent,
    //ChartAnalysisComponent,
    //LlpAnalysisComponent,
    //ProductAnalysisComponent,
    //FnaListComponent,
    //FnaDetailComponent,
    // ActivityManagementListComponent,
    // ActivityManagementDetailComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    InlineSVGModule,
    ExtrasModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    CoreModule,
    SubheaderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LayoutModule { }

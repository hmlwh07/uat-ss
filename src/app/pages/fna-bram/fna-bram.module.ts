import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FnaBramComponent } from './fna-bram.component';
import { RouterModule } from '@angular/router';
import { AboutBramComponent } from './about-bram/about-bram.component';
import { InputsComponent } from './inputs/inputs.component';
import { OutputsComponent } from './outputs/outputs.component';
import { ProductComponent } from './product/product.component';
import { InboundLogisticsComponent } from './inputs/inbound-logistics/inbound-logistics.component';
import { OperationComponent } from './inputs/operation/operation.component';
import { OutboundLogisticsComponent } from './inputs/outbound-logistics/outbound-logistics.component';
import { MarketingSalesComponent } from './inputs/marketing-sales/marketing-sales.component';
import { ServiceComponent } from './inputs/service/service.component';
import { TechnologyComponent } from './inputs/technology/technology.component';
import { HumanResourcesComponent } from './inputs/human-resources/human-resources.component';
import { ManagementInfrastructureComponent } from './inputs/management-infrastructure/management-infrastructure.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { WarehouseComponent } from './inputs/inbound-logistics/warehouse/warehouse.component';
import { RawMaterialStorageComponent } from './inputs/inbound-logistics/raw-material-storage/raw-material-storage.component';
import { TransportationComponent } from './inputs/inbound-logistics/transportation/transportation.component';
import { FactoryBuildingComponent } from './inputs/operation/factory-building/factory-building.component';
import { MachineryComponent } from './inputs/operation/machinery/machinery.component';
import { ManufacturingProcessComponent } from './inputs/operation/manufacturing-process/manufacturing-process.component';
import { WarehousingComponent } from './inputs/outbound-logistics/warehousing/warehousing.component';
import { GoodInTransportationComponent } from './inputs/outbound-logistics/good-in-transportation/good-in-transportation.component';
import { GoodInWarehousesComponent } from './inputs/outbound-logistics/good-in-warehouses/good-in-warehouses.component';
import { TransporationComponent } from './inputs/outbound-logistics/transporation/transporation.component';
import { MarketingAssetsComponent } from './inputs/marketing-sales/marketing-assets/marketing-assets.component';
import { SalesTeamComponent } from './inputs/marketing-sales/sales-team/sales-team.component';
import { ServiceInfrastructureComponent } from './inputs/service/service-infrastructure/service-infrastructure.component';
import { CallCenterComponent } from './inputs/service/call-center/call-center.component';
import { ServicingEmployeesComponent } from './inputs/service/servicing-employees/servicing-employees.component';
import { HardwareComponent } from './inputs/technology/hardware/hardware.component';
import { SystemSoftwareComponent } from './inputs/technology/system-software/system-software.component';
import { CustomerDataInformationComponent } from './inputs/technology/customer-data-information/customer-data-information.component';
import { ManagementTeamComponent } from './inputs/management-infrastructure/management-team/management-team.component';
import { LocationBusinessComponent } from './inputs/management-infrastructure/location-business/location-business.component';
import { FixAssetManagementComponent } from './inputs/management-infrastructure/fix-asset-management/fix-asset-management.component';
import { RecruitmentTrainingComponent } from './inputs/human-resources/recruitment-training/recruitment-training.component';
import { InputDataDialogComponent } from './inputs/input-data-dialog/input-data-dialog.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionnaireComponent } from './inputs/technology/questionnaire/questionnaire.component';
import { MatRadioModule } from '@angular/material/radio';
import { HumanResourcesQuestionnaireComponent } from './inputs/human-resources/human-resources-questionnaire/human-resources-questionnaire.component';
import { ManagementInfrastructureQuestionnaireComponent } from './inputs/management-infrastructure/management-infrastructure-questionnaire/management-infrastructure-questionnaire.component';
import { InboundLogisticsOthersComponent } from './inputs/inbound-logistics/inbound-logistics-others/inbound-logistics-others.component';
import { MarketingSalesOthersComponent } from './inputs/marketing-sales/marketing-sales-others/marketing-sales-others.component';
import { OperationOthersComponent } from './inputs/operation/operation-others/operation-others.component';
import { OutboundLogisticOthersComponent } from './inputs/outbound-logistics/outbound-logistics-others/outbound-logistics-others.component';
import { ServiceOthersComponent } from './inputs/service/service-others/service-others.component';
import { TechnologyOthersComponent } from './inputs/technology/technology-others/technology-others.component';
import { MarketTransporationComponent } from './inputs/marketing-sales/market-transporation/market-transporation.component';
import { LanguageModule } from '../../modules/languages/languages.modules';

@NgModule({
  declarations: [FnaBramComponent, AboutBramComponent, InputsComponent, OutputsComponent,
    ProductComponent, InboundLogisticsComponent, OperationComponent, OutboundLogisticsComponent,
    MarketingSalesComponent, ServiceComponent, TechnologyComponent, HumanResourcesComponent,
    ManagementInfrastructureComponent, WarehouseComponent, RawMaterialStorageComponent,
    TransportationComponent, FactoryBuildingComponent, MachineryComponent, OutboundLogisticOthersComponent,
    ManufacturingProcessComponent, WarehousingComponent, OperationOthersComponent,
    GoodInTransportationComponent, GoodInWarehousesComponent, TransporationComponent, MarketTransporationComponent,
    MarketingAssetsComponent, SalesTeamComponent, ServiceInfrastructureComponent, TechnologyOthersComponent,
    CallCenterComponent, ServicingEmployeesComponent, HardwareComponent, SystemSoftwareComponent,
    CustomerDataInformationComponent, ManagementTeamComponent, LocationBusinessComponent, MarketingSalesOthersComponent,
    FixAssetManagementComponent, RecruitmentTrainingComponent, InputDataDialogComponent, ServiceOthersComponent,
    QuestionnaireComponent, HumanResourcesQuestionnaireComponent, ManagementInfrastructureQuestionnaireComponent,
    InboundLogisticsOthersComponent],
  imports: [
    NgbModule,
    CommonModule,
    MatTableModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    LanguageModule,
    CRUDTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: FnaBramComponent,
      },
    ]),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [NgbActiveModal, DatePipe],
  exports: [AboutBramComponent, InputsComponent, OutputsComponent,
    ProductComponent, WarehouseComponent, FactoryBuildingComponent]
})
export class FnaBramModule { }

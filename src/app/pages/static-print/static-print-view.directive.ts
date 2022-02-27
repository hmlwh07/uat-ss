import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from "@angular/core";
import { EducationLifeGripViewComponent } from "../static-page-review/education-life-griph-view/education-life-griph-view.component";
import { EndoGripComponent } from "../static-pages/endo-griph/endo-griph.component";
import { AddonPrintComponent } from "./addon-print/addon-print.component";
import { CoveragePrintComponent } from "./coverage-print/coverage-print.component";
import { EducationLifePrintComponent } from "./education-life-print/education-life-print.component";
import { EndoPrintComponent } from "./endo-print/endo-print.component";
import { EndoSignPrintComponent } from "./endo-sign-print/endo-sign-print.component";
import { FarmerPrintComponent } from "./farmer-print/farmer-print.component";
import { FireDetailPrintComponent } from "./fire-detail-print/fire-detail-print.component";
import { FireRiskPrintComponent } from "./fire-risk-print/fire-risk-print.component";
import { HealthPrintComponent } from "./health-print/health-print.component";
import { MoterPrintComponent } from "./moter-print/moter-print.component";
import { PaPrintComponent } from "./pa-print/pa-print.component";

const STATIC_PRINT_COMPONENT = {
  'print_1638594148571': MoterPrintComponent,
  'print_1638594176913': FarmerPrintComponent,
  'print_1645157346931': HealthPrintComponent,
  'print_1645157579888': PaPrintComponent,
  'addon_1634010770155': AddonPrintComponent,
  'coverage_1634010995936': CoveragePrintComponent,
  'static_1641364737069': FireDetailPrintComponent,
  'static_1643116155828': FireRiskPrintComponent,
  'static_1644896661652': EndoPrintComponent,
  'print_1645941212846': EndoSignPrintComponent,
  'static_1635309151504': EducationLifePrintComponent
}
@Directive({
  selector: '[staticPirint]'
})
export class StaticPrintDirective implements OnInit {
  component: ComponentRef<any>;
  @Input() compId: string
  @Input() resourcesId: string
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
  ) { }

  ngOnInit() {

    if (STATIC_PRINT_COMPONENT[this.compId]) {
      const component = this.resolver.resolveComponentFactory<any>(STATIC_PRINT_COMPONENT[this.compId]);
      this.component = this.container.createComponent(component);
      this.component.instance.resourcesId = this.resourcesId
    }

  }


}
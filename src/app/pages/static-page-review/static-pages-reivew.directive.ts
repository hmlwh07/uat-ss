import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, Input, OnInit, Output, Renderer2, ViewContainerRef } from "@angular/core";
import { GlobalFunctionService } from "src/app/core/global-fun.service";
import { PolicyDTO } from "../policy/policy.dto";
import { Product } from "../products/models/product.dto";
import { QuotationDTO } from "../quotations/quotation.dto";
import { StaticField } from "../static-pages/static-field.interface";
import { AddonViewComponent } from "./addon-view/addon-view.component";
import { CoverageViewComponent } from "./coverage-view/coverage-view.component";
import { EducationLifeViewComponent } from "./education-life-view/education-life-view.component";
import { EndoGripViewComponent } from "./endo-griph-view/endo-griph-view.component";
import { EndoViewComponent } from "./endo-view/endo-view.component";
import { FirePageViewComponent } from "./fire-page-view/fire-page-view.component";
import { FireRiskViewComponent } from "./fire-risk-view/fire-risk-view.component";
import { HealthQuoViewComponent } from "./health-quo-view/health-quo-view.component";
import { MotorAddonViewComponent } from "./motor-addon-view/motor-addon-view.component";
import { SimplePageViewComponent } from "./simple-page-view/simple-page-view.component";
import { TravelViewComponent } from "./travel-page-view/travel-page-view.component";
// import { STATIC_VIEW_COMPONENT } from "./static-pages-reivew.data";
const STATIC_VIEW_COMPONENT = {
  'static_1634018514043': SimplePageViewComponent,
  'addon_1634010770155': AddonViewComponent,
  'coverage_1634010995936': CoverageViewComponent,
  'static_1635218894755': HealthQuoViewComponent,
  'static_1635309151504': EducationLifeViewComponent,
  // 'static_1635392848894': EducationLifeGripViewComponent,
  'static_1635747288508': SimplePageViewComponent,
  'static_1642920843499': FirePageViewComponent,
  'static_1643116155828': FireRiskViewComponent,
  'static_1644896661652': EndoViewComponent,
  'static_1644896804675': EndoGripViewComponent,
  'static_1648784270356': TravelViewComponent,
  // 'static_1648784270432':MotorAddonViewComponent
  // ''
}
@Directive({
  selector: '[staticPageView]'
})
export class StaticPageViewDirective implements StaticField, OnInit {
  @Input() compId: string
  @Input() product: Product
  @Input() resourcesId: string
  @Input() isApplication:any;
  @Output() getQuoResult = new EventEmitter()
  component: ComponentRef<StaticField>;
  component2: ComponentRef<StaticField>;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private globalFun: GlobalFunctionService
  ) { }
  ngOnInit() {
    if (STATIC_VIEW_COMPONENT[this.compId]) {
      const component = this.resolver.resolveComponentFactory<StaticField>(STATIC_VIEW_COMPONENT[this.compId]);
      this.component = this.container.createComponent(component);
      this.component.instance.product = this.product
      this.component.instance.resourcesId = this.resourcesId
      if (this.product.code == 'PLMO01' || this.product.code == 'PLMO02') {
        if (this.compId == 'coverage_1634010995936') {
          this.globalFun.quotationResult.subscribe((res) => {
            this.getQuoResult.emit(res)
          })
        }
      }
      if (this.compId == "static_1635747288508") {
        const component = this.resolver.resolveComponentFactory<StaticField>(STATIC_VIEW_COMPONENT['static_1635218894755']);
        this.component2 = this.container.createComponent(component);
        this.component2.instance.product = this.product
        this.component2.instance.resourcesId = this.resourcesId
        this.component.instance.isApplication = this.isApplication
      }
    }
  }
}
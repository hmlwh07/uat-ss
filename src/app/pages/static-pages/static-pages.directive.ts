import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, Input, OnInit, Output, Renderer2, ViewContainerRef } from "@angular/core";
import { PolicyDTO } from "../policy/policy.dto";
import { Product } from "../products/models/product.dto";
import { QuotationDTO } from "../quotations/quotation.dto";
import { AddonPageComponent } from "./addon-page/addon-page.component";
import { CoveragePageComponent } from "./coverage-page/coverage-page.component";
import { EducationLifeComponent } from "./education-life/education-life.component";
import { EndoGripComponent } from "./endo-griph/endo-griph.component";
import { EndoComponent } from "./endo/endo.component";
import { FireRiskComponent } from "./fire-risk/fire-risk.component";
import { FirePageComponent } from "./fire-simple-page/fire-simple-page.component";
import { HealthQuoComponent } from "./health-quo/health-quo.component";
import { MotorAddonComponent } from "./motor-addon/motor-addon.component";
import { SimplePagePolicyComponent } from "./simple-page-policy/simple-page-policy.component";
import { SimplePageComponent } from "./simple-page/simple-page.component";
import { StaticField, StaticPageAction } from "./static-field.interface";
import { TravelComponent } from "./travel-page/travel-page.component";
// import { STATIC_COMPONENT } from "./static-pages.data";
const STATIC_COMPONENT = {
  'addon_1634010770155': AddonPageComponent,
  'coverage_1634010995936': CoveragePageComponent,
  'static_1634018514043': SimplePageComponent,
  'static_1635218894755': HealthQuoComponent,
  'static_1635309151504': EducationLifeComponent,
  // 'static_1635392848894' : EducationLifeGripComponent,
  'static_1635747288508': SimplePagePolicyComponent,
  'static_1641364737069': FirePageComponent,
  'static_1643116155828': FireRiskComponent,
  'static_1644896661652': EndoComponent,
  'static_1644896804675': EndoGripComponent,
  'static_1648784270356': TravelComponent,
  'static_1648784270432': MotorAddonComponent
}
@Directive({
  selector: '[staticPage]'
})
export class StaticPageDirective implements StaticField, OnInit {

  @Input() compId: string
  @Input() product: Product
  @Input() resourcesId: string
  @Input() premiumAmt?: string
  @Input() editData: QuotationDTO | PolicyDTO
  @Output() eventOut = new EventEmitter<StaticPageAction>();

  component: ComponentRef<StaticField>;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
  ) { }
  ngOnInit() {
    this.reCreate()

  }

  reCreate() {
    this.container.clear()
    const component = this.resolver.resolveComponentFactory<StaticField>(STATIC_COMPONENT[this.compId]);
    this.component = this.container.createComponent(component);
    this.component.instance.product = this.product
    this.component.instance.editData = this.editData
    this.component.instance.resourcesId = this.resourcesId
    this.component.instance.premiumAmt = this.premiumAmt

    this.component.instance.actionEvent.subscribe((res) => {
      this.eventOut.emit(res)
    })
    // console.log(this.resourcesId);
  }

}
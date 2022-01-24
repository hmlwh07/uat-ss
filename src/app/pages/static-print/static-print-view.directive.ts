import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from "@angular/core";
import { AddonPrintComponent } from "./addon-print/addon-print.component";
import { CoveragePrintComponent } from "./coverage-print/coverage-print.component";
import { FarmerPrintComponent } from "./farmer-print/farmer-print.component";
import { MoterPrintComponent } from "./moter-print/moter-print.component";

const STATIC_PRINT_COMPONENT = {
  'print_1638594148571': MoterPrintComponent,
  'print_1638594176913': FarmerPrintComponent,
  'addon_1634010770155': AddonPrintComponent,
  'coverage_1634010995936': CoveragePrintComponent,
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
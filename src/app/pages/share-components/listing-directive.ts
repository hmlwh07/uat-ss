import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewContainerRef } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivityItemComponent } from "./activity-item/activity-item.component";
import { ApplicationItemComponent } from "./application-item/application-item.component";
import { CustomerItemComponent } from "./customer-item/customer-item.component";
import { LeadItemComponent } from "./lead-item/lead-item.component";
import { ListField, ListItemAction } from "./list-field.interface";
import { QuotationItemComponent } from "./quotation-item/quotation-item.component";
const LIST_ITEM_COMPONENT = {
  lead: LeadItemComponent,
  policy: ApplicationItemComponent,
  quotat: QuotationItemComponent,
  customer: CustomerItemComponent,
  activity: ActivityItemComponent,
}
@Directive({
  selector: '[list-directive]'
})
export class ListingDirective implements ListField, OnInit, OnDestroy {

  @Input() viewType: string
  @Input() itemData: any
  @Output() btnEvent?: EventEmitter<ListItemAction>;
  component: ComponentRef<ListField>;
  unsub: Subscription[] = []
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
  ) { }

  ngOnDestroy(): void {
    this.unsub.forEach(x => x.unsubscribe())
  }

  ngOnInit(): void {
    const component = this.resolver.resolveComponentFactory<ListField>(LIST_ITEM_COMPONENT[this.viewType]);
    this.component = this.container.createComponent(component);
    this.component.instance.itemData = this.itemData;
    this.unsub[0] = this.component.instance.btnEvent.subscribe((eventData) => {
      this.clickedEvent(eventData)
    })
  }

  clickedEvent(event) {
    this.btnEvent.emit(event)
  }


}
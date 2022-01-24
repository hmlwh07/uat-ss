import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-coverage-option",
  templateUrl: "./coverage-option.component.html",
})
export class CoverageOption {

  @Input() isSum: boolean;
  @Input() isUnit: boolean;
  @Input() isPremium: boolean;
  @Input() type: string;

  @Output() changeOpt = new EventEmitter()

  constructor() { }

  updateOption() {
    this.changeOpt.next({ isSum: this.isSum, isUnit: this.isUnit, isPremium: this.isPremium });
  }

}
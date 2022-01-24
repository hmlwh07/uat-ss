import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-ui-pages",
  templateUrl: "./ui-pages.component.html",
})
export class UIPagesComponent implements OnInit {

  @Input() config: any[] = []

  @Output() changeOpt = new EventEmitter()

  constructor() { }

  ngOnInit() {

  }

  editLayout(page) {
    this.changeOpt.emit(page)
  }


}
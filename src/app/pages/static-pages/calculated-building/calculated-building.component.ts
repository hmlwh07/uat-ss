import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculated-building',
  templateUrl: './calculated-building.component.html',
  styleUrls: ['./calculated-building.component.scss']
})
export class CalculatedBuildingComponent implements OnInit {
  isContents: boolean = false
  isPlant: boolean = false
  isStock: boolean = false
  default: string = "System Default"
  primary = 'primary'
  total:number=0
  tableData: any = []
  constructor() { }

  ngOnInit(): void {
    this.tableData = [
      {
        itemName: '-',
        itemDescription: '-',
        valuePerquantity: '-',
        Quantity: '5',
        totalValue: '500000'
      }
    ]
  }
  add(type) {

  }
  toggleChange(type) {
    if (type == 'contents') {
      this.isContents = this.isContents
    }
    if (type == 'plants') {
      this.isPlant = this.isPlant
    }
    if (type == 'stock') {
      this.isStock = this.isStock
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { LAYOUT_DATA } from './layout-data.enum';

interface BlogType {
  type?: string
  unitId?: string,
  name?: string,
  child?: any[]
}
@Component({
  selector: 'app-layout-dynamic-detail',
  templateUrl: './layout-dynamic-detail.component.html',
  styleUrls: ['./layout-dynamic-detail.component.scss'],
})
export class LayoutDynamicDetailComponent implements OnInit {
  layoutData = LAYOUT_DATA
  activeBlog: BlogType = {}
  constructor() { }

  ngOnInit() { }

  onCreate(){
    
  }

}

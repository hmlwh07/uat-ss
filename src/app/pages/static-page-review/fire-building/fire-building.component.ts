import { Component, Input, OnInit } from '@angular/core';
import { SurroundingBuildingService } from '../../static-pages/surrounding-building/models&services/surrounding-building.service';

@Component({
  selector: 'app-fire-building',
  templateUrl: './fire-building.component.html',
  styleUrls: ['./fire-building.component.scss']
})
export class FireBuildingComponent implements OnInit {
  @Input() riskId = 0
  surrounding:any=[]
  constructor(private SurroundingBuildingService:SurroundingBuildingService) { }

  ngOnInit(): void {
  }

  onActionView(data, type) {
    console.log("data", data, "type", type)
    if (type == 'delete') {
      this.SurroundingBuildingService.delete(data.id).toPromise()
        .then((res) => {
          if (res) {
            let index = this.surrounding.findIndex(x => x.id == data.id)
            if (index >= 0) {
              this.surrounding.splice(index, 1)
            }
          }
        });
    } 
  }
}

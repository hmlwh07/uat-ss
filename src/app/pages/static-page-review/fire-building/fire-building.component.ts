import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { SurroundingBuildingService } from '../../static-pages/surrounding-building/models&services/surrounding-building.service';

@Component({
  selector: 'app-fire-building',
  templateUrl: './fire-building.component.html',
  styleUrls: ['./fire-building.component.scss']
})
export class FireBuildingComponent implements OnInit {
  @Input() riskId = 0
  surrounding: any = []
  constructor(private SurroundingBuildingService: SurroundingBuildingService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  onActionView(data, type) {
    console.log("data", data, "type", type)
    if (type == 'delete') {
      this.alertService.activate('Are you sure you want to delete?', 'Warning Message').then(result => {
        if (result) {
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
      });
    }
  }
}

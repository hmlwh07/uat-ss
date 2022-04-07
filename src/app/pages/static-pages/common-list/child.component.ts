import { Component, OnInit, Input, OnChanges, ElementRef, Output, EventEmitter, AfterViewInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivityStatus, TableCol } from '../../../_metronic/shared/crud-table/components/material-table-view/table-dto';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as moment from 'moment';
import { SelectionModel } from '@angular/cdk/collections';
import { StylePaginatorDirective } from '../../../_metronic/shared/crud-table/components/material-table-view/custom-paginator.directive';
import { PRODUCT_STATUS } from './../../products/models/product.dto';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./common-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildComponent{
    @Input() data: any;
    @Output('actionResponse') actionResponse = new EventEmitter();
    constructor(private cdf: ChangeDetectorRef) {
        console.log('data',this.data)
     }
    emitAction(action : string){
        this.actionResponse.emit({action : action, data : this.data});
    }
}
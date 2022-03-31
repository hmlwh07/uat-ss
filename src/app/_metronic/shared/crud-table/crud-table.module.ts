import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { NgPagination } from './components/paginator/ng-pagination/ng-pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { SortConfigModalComponent } from '../../../pages/form-component/sort-config-modal/sort-config-modal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PrintError } from './components/print-error/print-error.component';
import { SortIconComponent } from './components/sort-icon/sort-icon.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { MaterialTableViewComponent } from './components/material-table-view/material-table-view.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { OverlayModule } from '@angular/cdk/overlay';
import { StylePaginatorDirective } from './components/material-table-view/custom-paginator.directive';
import { StartEndDateComponent } from './components/start-end-date/start-end-date.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RemoveHost } from './components/start-end-date/remove-host.directive';
import { LanguageModule } from 'src/app/modules/languages/languages.modules';

@NgModule({
  declarations: [PaginatorComponent, NgPagination, SortIconComponent, SortConfigModalComponent, PrintError, ActionButtonComponent,MaterialTableViewComponent,StylePaginatorDirective,StartEndDateComponent,RemoveHost],
  imports: [CommonModule, FormsModule, InlineSVGModule, DragDropModule,MatTableModule,MatPaginatorModule,MatSortModule,OverlayModule,MatDatepickerModule,ReactiveFormsModule,LanguageModule],
  exports: [PaginatorComponent, NgPagination, SortIconComponent, SortConfigModalComponent, PrintError, ActionButtonComponent,MaterialTableViewComponent,StylePaginatorDirective,StartEndDateComponent,RemoveHost],
  entryComponents: [SortConfigModalComponent]
})
export class CRUDTableModule { }

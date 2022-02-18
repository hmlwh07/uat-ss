import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';
import { NoticeComponent } from './notice/notice.component';
import { CodePreviewComponent } from './code-preview/code-preview.component';
import { CoreModule } from '../../../core';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG2: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [NoticeComponent, CodePreviewComponent],
  imports: [
    CommonModule,
    CoreModule,
    HighlightModule,
    PerfectScrollbarModule,
    
    // ngbootstrap
    NgbNavModule,
    NgbTooltipModule,
    InlineSVGModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG2,
    },
  ],
  exports: [NoticeComponent, CodePreviewComponent],
})
export class GeneralModule {}

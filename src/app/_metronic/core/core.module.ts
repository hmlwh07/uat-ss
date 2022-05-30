import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { GetFirstWord } from './pipes/first-word.pipe';

@NgModule({
  declarations: [FirstLetterPipe, SafePipe,GetFirstWord],
  imports: [CommonModule],
  exports: [FirstLetterPipe, SafePipe,GetFirstWord],
})
export class CoreModule { }

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DynTranslatePipe } from "./dyn-translate.pipe";
import { TranslatePipe } from "./translate.pipe";

@NgModule({
imports:[CommonModule,FormsModule],
declarations:[TranslatePipe,DynTranslatePipe],
exports:[TranslatePipe,DynTranslatePipe]
})
export class LanguageModule{

}
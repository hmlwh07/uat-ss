import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslatePipe } from "./translate.pipe";

@NgModule({
imports:[CommonModule,FormsModule],
declarations:[TranslatePipe],
exports:[TranslatePipe]
})
export class LanguageModule{

}
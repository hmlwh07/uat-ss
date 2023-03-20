import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LanguagesService } from '../languages/languages.service';

interface LanguageFlag {
  lang: string;
  name: string;
  flag: string;
  active?: boolean;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  today: Date = new Date();
  lang: string = 'EN'
  appVersion:string='1.0.11'
  @Output() emitter = new EventEmitter();
  constructor(private cdf: ChangeDetectorRef, private languageService: LanguagesService) { }

  ngOnInit(): void {
  }

 
  changeLanguage() {
    this.languageService.toggleLange()
    this.lang = this.languageService.getSelectedLanguage()
  }


}

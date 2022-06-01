import { ChangeDetectorRef, Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LanguagesService } from 'src/app/modules/languages/languages.service';

interface LanguageFlag {
  lang: string;
  name: string;
  flag: string;
  active?: boolean;
}

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  @Input() data
  @Output() emitter = new EventEmitter();
  language: LanguageFlag;
  languages: LanguageFlag[] = [
    {
      lang: 'EN',
      name: 'English',
      flag: './assets/media/svg/flags/012-uk.svg',
    },

    {
      lang: 'MM',
      name: 'Myanmar',
      flag: './assets/media/svg/flags/058-myanmar.svg',
    },
  ];
  constructor(

    private router: Router,
    private lang:LanguagesService,
    private cdf:ChangeDetectorRef
  ) { }

  ngOnInit() {
    let lang=this.lang.getSelectedLanguage() 
    this.setSelectedLanguage();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        this.setSelectedLanguage();
      });
  }

  setLanguageWithRefresh(lang) {
    this.setLanguage(lang);
    window.location.reload();
  }

  setLanguage(lang) {
    this.lang.setLanguage(lang)
    this.languages.forEach((language: LanguageFlag) => {
      
      if (language.lang === lang) {
        language.active = true;
        this.language = language;
        this.cdf.detectChanges()
        this.emitter.emit(lang)
      } else {
        language.active = false;
      }
    });

  }

  setSelectedLanguage(): any {

  }
}

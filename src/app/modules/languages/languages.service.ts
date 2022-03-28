import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
export interface Locale {
  lang: string;
  data: any;
}
export interface Langs {
  en: any,
  mm: any
}
const LOCALIZATION_LOCAL_STORAGE_KEY = 'kbzDefaultLanguage';

@Injectable()
export class LanguagesService {
  langs: Langs
  private seletedLanguage = 'en'
  languageChanged = new Subject()
  constructor(private ngZone: NgZone) {
    this.seletedLanguage = localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) || 'en'
  }

  loadTranslations(en: Locale, mm: Locale) {
    this.langs = { en: en.data, mm: mm.data }
  }

  setLanguage(lang) {
    if (lang) {
      this.seletedLanguage = lang
      localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang);
      this.languageChanged.next(null)
    }
  }

  getSelectedLanguage(): string {
    return (
      this.seletedLanguage
    );
  }

  toggleLange() {
    // if(this.seletedLanguage == )
    this.ngZone.run(()=>{
      this.seletedLanguage = this.seletedLanguage == "en" ? "mm" : "en"
      localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, this.seletedLanguage);
      this.languageChanged.next(null)
    })
    
  }
  
  transform(value: string) {
    if (value) {
      let current = this.getSelectedLanguage();
      let valueObj = value.split('.')
      if (valueObj.length == 2) {
        try {
          return this.langs[current][valueObj[0]][valueObj[1]]
        } catch (error) {
          return "Can't Translate Data"
        }
      }
    }
    return value
  }
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LanguagesService } from 'src/app/modules/languages/languages.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styles: [`.setting-label{
    display: inline-block;
    margin-left: 10px;
  }`]
})
export class SettingPage implements OnInit {
  languageData: string = 'en'
  constructor(private navCtrl: NavController, private langService: LanguagesService,private cdf: ChangeDetectorRef) { }

  ngOnInit() {
    this.languageData = this.langService.getSelectedLanguage()
  }

  changeLang() {
    this.langService.setLanguage(this.languageData)
    // console.log(this.languageData);
    this.cdf.detectChanges()
  }

}

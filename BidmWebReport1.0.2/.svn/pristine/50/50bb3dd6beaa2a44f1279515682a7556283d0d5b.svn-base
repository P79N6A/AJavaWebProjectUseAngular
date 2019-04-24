import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Langs {
  keyName;
  lang;
  label;
  value;
}

@Injectable()
export class LanguageService {

  currentLanguage: any = 'keyName=0&lang=kr';
  langs: Langs[];
  currentLangData;

  constructor( private translate: TranslateService ) { }

  initLang() {
    this.translate.use(this.currentLanguage);

  }

  onSelected(selectedLang) {
    this.setLanguage(selectedLang);
  }

  setLanguage(language) {
    this.currentLanguage = language;
     this.translate.use(language);
  }
  setCurrentLangData(language) {
    this.currentLangData = language;
  }
  getCurrentLangData() {
    return this.currentLangData;
  }

}

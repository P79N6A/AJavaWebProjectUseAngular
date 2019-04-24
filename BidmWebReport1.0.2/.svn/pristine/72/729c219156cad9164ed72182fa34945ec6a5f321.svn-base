import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'datefmt'
})
export class DatefmtPipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  transform(value: Date, fmt: string): string {
    // const lang = localStorage.getItem('language');
    // this.translate.setDefaultLang('en');

    // const ll = this.translate.instant('monday');
    // console.log(ll);
    // console.log(this.translate);

    const o = {
      "M+": value.getMonth() + 1,
      "d+": value.getDate(),
      "h+": value.getHours(),
      "m+": value.getMinutes(),
      "s+": value.getSeconds(),
      "q+": Math.floor((value.getMonth() + 3) / 3),
      "S" : value.getMilliseconds()
    };

    const week = {
      "0": "sunday",
      "1": "monday",
      "2": "tuesday",
      "3": "wednesday",
      "4": "thursday",
      "5": "friday",
      "6": "saturday"
    };

    if(/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (value.getFullYear() + "").substr(4 - RegExp.$1.length));

    if(/(E+)/.test(fmt)){         
      // fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "星期" : "周") : "") + week[value.getDay()+""]);         
      fmt = fmt.replace(
        RegExp.$1,
        (RegExp.$1.length > 1) 
          ? (
              (RegExp.$1.length > 2) 
                ? this.translate.instant(week[value.getDay()]) 
                : this.translate.instant(week[value.getDay()] + ".short")
            ) 
          : this.translate.instant(week[value.getDay() + ".min"]));
    } 

    for(var k in o)
      if(new RegExp("("+ k +")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));

    return fmt;
  }

}

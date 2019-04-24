import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() conditions: any[];

  private calendarLang: any;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    // this.setCalendarLang();
    this.calendarLang = {
      firstDayOfWeek: 0,
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: 'Today', 
      clear: 'Clear'
    };
  }

  conditionChanged(newcondition: any) {
    // console.log("searchbar changed");
    this.conditions = newcondition;
  }

  calendarFocus(event: any) {
    this.setCalendarLang();
  }

  setCalendarLang() {
    const weeks: string[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let weeks_short: string[] = [];
    let weeks_min: string[] = [];
    weeks.forEach(week => {
      weeks_short.push(week + ".short");
      weeks_min.push(week + ".min");
    });

    const monthes: string[] = [
      "january", "february", "march", 
      "april", "may", "june", 
      "july", "august", "september", 
      "october", "november", "december"
    ];
    let monthes_short: string[] = [];
    monthes.forEach(month => {
      monthes_short.push(month + ".short");
    });

    let keys: string[] = weeks.concat(weeks_short, weeks_min, monthes, monthes_short);
    keys.push("today");
    keys.push("clear");

    this.translate.get(keys).subscribe(
      (result) => {
        // console.log(result);
        const dayNames: string[] = [
          result['sunday'],
          result['monday'],
          result['tuesday'],
          result['wednesday'],
          result['thursday'],
          result['friday'],
          result['saturday']
        ];
        const dayNamesShort: string[] = [
          result['sunday.short'],
          result['monday.short'],
          result['tuesday.short'],
          result['wednesday.short'],
          result['thursday.short'],
          result['friday.short'],
          result['saturday.short']
        ];
        const dayNamesMin: string[] = [
          result['sunday.min'],
          result['monday.min'],
          result['tuesday.min'],
          result['wednesday.min'],
          result['thursday.min'],
          result['friday.min'],
          result['saturday.min']
        ];
        const monthNames: string[] = [
          result['january'],
          result['february'],
          result['march'],
          result['april'],
          result['may'],
          result['june'],
          result['july'],
          result['august'],
          result['september'],
          result['october'],
          result['november'],
          result['december']
        ];
        const monthNamesShort: string[] = [
          result['january.short'],
          result['february.short'],
          result['march.short'],
          result['april.short'],
          result['may.short'],
          result['june.short'],
          result['july.short'],
          result['august.short'],
          result['september.short'],
          result['october.short'],
          result['november.short'],
          result['december.short']
        ];
        this.calendarLang = {
          firstDayOfWeek: 0,
          dayNames: dayNames, dayNamesShort: dayNamesShort, dayNamesMin: dayNamesMin,
          monthNames: monthNames, monthNamesShort: monthNamesShort,
          today: result['today'], 
          clear: result['clear']
        };
      }
    );
  }

  setCalendarLang1() {
    // console.log("focus");
    const lang = localStorage.getItem("language");
    if (lang === 'zh') {
      this.calendarLang = {
        firstDayOfWeek: 0,
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        today: '今日', 
        clear: '清除'
      };
    } else {
      this.calendarLang = {
        firstDayOfWeek: 0,
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: 'Today', 
        clear: 'Clear'
      };
    }
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(
    private http : HttpClient
  ) { }

  getDataFromUrl(component) {
    // console.log(component.url);
    if (component.url != null && component.url.length > 0) {
      this.http.get(component.url).subscribe((result) => {
        // console.log(result);
        component.getOk(result);
      });
    }
  }

}

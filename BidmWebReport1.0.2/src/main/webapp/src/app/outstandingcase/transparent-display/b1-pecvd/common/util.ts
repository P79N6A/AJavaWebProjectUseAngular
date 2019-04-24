import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BoeService } from 'app/outstandingcase/transparent-display/b1-pecvd/boe.service';

//@Injectable()
export class Util {
    constructor(private service: BoeService) { }
    getService(){

        return this.service;
    }


}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from 'environments/environment';

@Injectable()
export class FileUploadService {

    private apiUrl = environment.apiPath;

    // constructor(private http: HttpClient) { }
    constructor(private http: HttpClient) { }

    getFileDownLoad(fileId: string): Observable<Blob> {
        console.log('apiUrl : ', this.apiUrl);
        console.log(this.apiUrl + '/file/download?fileId=' + fileId);

        return this.http.get(this.apiUrl + '/file/download?fileId=' + fileId, {
            responseType: 'blob'
        });
        // .map(res => res.blob())
        // .catch(this.handleError)
    }

    getExcelDownLoad(url: string, data): Observable<Blob> {
        console.log('url : ', url);
        console.log(this.apiUrl + url);

        return this.http.post(this.apiUrl + url, data, {
            responseType: 'blob'
        });

    }

    getDownloadUrl(){
        return this.apiUrl+'/file/download?localPath=&fileId=';
    }
}

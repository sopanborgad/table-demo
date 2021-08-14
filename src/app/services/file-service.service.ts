import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private httpClient: HttpClient) {

  }
  postFile(fileToUpload: File) {
    const endpoint = 'localhost:8080/uploadfile';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    let headers = new HttpHeaders();
    return this.httpClient
      .post(endpoint, formData, { headers: headers })
  }
}

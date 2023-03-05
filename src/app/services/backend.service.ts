import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  // _baseURL: string = 'http://localhost:5000/api';
  _baseURL: string = 'http://142.4.2.247:5000/api';


  constructor(private httpClient: HttpClient) {}

  fetchData(url: string, params: any): Observable<any> {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers, withCredentials: true, params };
    return this.httpClient.get(this._baseURL + url, options);
  }
}

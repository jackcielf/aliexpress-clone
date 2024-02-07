import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private baseURL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  public get(path: string, options?: any): Observable<any> {
    return this.http.get(this.baseURL + path, options);
  }

  public post(path: string, body: any, options?: any): Observable<any> {
    return this.http.post(this.baseURL + path, body, options);
  }

  public put(path: string, body: any, options?: any): Observable<any> {
    return this.http.put(this.baseURL + path, body, options);
  }

  public delete(path: string, options?: any): Observable<any> {
    return this.http.delete(this.baseURL + path, options);
  }

  public patch(path: string, body: any, options?: any): Observable<any> {
    return this.http.patch(this.baseURL + path, body, options);
  }

  public setBaseURL(baseURL: string) {
    this.baseURL = baseURL;
  }
}

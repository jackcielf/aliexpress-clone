import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from "../interfaces/user";
import { Product } from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    const url = `${this.baseUrl}users`;

    return this.http.get<User[]>(url);
  }

  public getProducts(): Observable<Product[]> {
    const url = `${this.baseUrl}products`;

    return this.http.get<Product[]>(url);
  }

  public getSuggestions(): Observable<any> {
    const url = `${this.baseUrl}suggestions`;

    return this.http.get(url);
  }
}

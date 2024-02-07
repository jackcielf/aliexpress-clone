import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';
import { Product } from '../../interfaces/product';
import { BaseService } from '../base-http/base.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private http: HttpClient, private baseUrl: BaseService) {}

  public getUsers(): Observable<User[]> {
    const url = `users`;

    return this.baseUrl.get(url);
  }

  public getProducts(): Observable<Product[]> {
    const url = `products`;

    return this.baseUrl.get(url);
  }

  public getSuggestions(): Observable<any> {
    const url = `suggestions`;

    return this.baseUrl.get(url);
  }
}

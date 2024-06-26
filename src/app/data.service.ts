import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchCustomers(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/customers.json');
  }

  fetchProducts(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/products.json');
  }

  fetchUsers(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/users.json');
  }
}

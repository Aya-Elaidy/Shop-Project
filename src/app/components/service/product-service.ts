import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/iproduct';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.apiBaseUrl}`);
  }

  getProductByID(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.apiBaseUrl}/${id}`);
  }
}

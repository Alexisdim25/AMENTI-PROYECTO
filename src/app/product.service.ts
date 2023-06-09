import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:4000/api'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getProductsByIds(productIds: number[]): Observable<any> {
    const url = `${this.apiUrl}/products-by-ids`;
    return this.http.post(url, { productIds });
  }
}

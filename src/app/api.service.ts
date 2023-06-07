import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})

export class ApiService {
  private apiUrl = 'http://localhost:4200'; // Reemplaza con la URL de tu servidor de Node.js

  constructor(private http: HttpClient) { }

  getProductsWomen(): Observable<any> {
    const url = `${this.apiUrl}/api/products-women`;
    return this.http.get(url);
  }
}

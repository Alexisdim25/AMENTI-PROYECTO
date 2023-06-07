import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-women',
  templateUrl: './products-women.component.html',
  styleUrls: ['./products-women.component.css']
})
export class ProductsWomenComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWomenProducts();
  }

  getWomenProducts() {
    this.http.get<any[]>('/api/products-women').subscribe(
      (data: any[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error al obtener los productos para mujeres:', error);
      }
    );
  }
  addToCart(product: any) {
    this.http.post('/api/cart', { productId: product.id }).subscribe(
      () => {
        console.log('Producto agregado al carrito');
      },
      (error) => {
        console.error('Error al agregar el producto al carrito:', error);
      }
    );
  }
} 
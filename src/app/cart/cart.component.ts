import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  products: any[] = []; // Define la propiedad 'products' como un arreglo vacío
  totalPrice: number = 0; // Define la propiedad 'totalPrice' con un valor inicial de 0
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.http.get<any[]>('/api/cart').subscribe(
      (data: any[]) => {
        this.cartItems = data;
        this.calculateTotalPrice(); // Calcula el precio total al obtener los elementos del carrito
      },
      (error) => {
        console.error('Error al obtener los productos del carrito:', error);
      }
    );
  }

  calculateTotalPrice() {
    this.totalPrice = 0; // Reinicia el valor del precio total antes de calcularlo nuevamente
    
    for (const item of this.cartItems) {
      this.totalPrice += item.price; // Suma el precio de cada producto al precio total
    }
  }

  checkout() {
    // Lógica para finalizar el pedido (opcional)
  }
}

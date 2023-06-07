import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsWomenComponent } from './products-women/products-women.component';
import { OrderByPipe } from './order-by.pipe';
import { ProductService } from './product.service';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsWomenComponent,
    OrderByPipe,
    CartComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LoginPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

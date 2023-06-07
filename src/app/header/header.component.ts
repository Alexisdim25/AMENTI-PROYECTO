import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoginPopupVisible = false;

  toggleLoginPopup() {
    this.isLoginPopupVisible = !this.isLoginPopupVisible;
  }
}

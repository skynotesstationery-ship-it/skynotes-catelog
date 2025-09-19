import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() openCartEvent = new EventEmitter<void>();
  @Output() goHomeEvent = new EventEmitter<void>();

  cartCount = 0;

  constructor(private cart: CartService) {
    this.cartCount = this.cart.totalCount();
    this.cart.cartChanged.subscribe(()=> this.cartCount = this.cart.totalCount());
  }

  openCart() { this.openCartEvent.emit(); }
  goHome() { this.goHomeEvent.emit(); }
}

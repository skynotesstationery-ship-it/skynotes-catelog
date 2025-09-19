import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Output() backEvent = new EventEmitter<void>();

  cartItems: any = [];
  // cartItems = this.cart.items();
  mobile = '';
  address = '';

  constructor(public cart: CartService) {
    this.refresh();
    this.cart.cartChanged.subscribe(()=> this.refresh());
  }

  refresh() { this.cartItems = this.cart.items(); }

  plus(id: string) { this.cart.addItemById(id, 1); }
  minus(id: string) { this.cart.addItemById(id, -1); }

  remove(id: string) { this.cart.removeItem(id); }

  canOrder() {
    return this.mobile.trim().length >= 6 && this.address.trim().length > 10 && this.cartItems.length > 0;
  }

  order() {
    if (!this.canOrder()) return;
    // build mailto body
    const lines = this.cartItems.map((it:any) => `${it.product.name} x ${it.qty} — ₹${it.product.price} each`);
    const total = this.cart.totalPrice();
    const body = encodeURIComponent(`New order from Skynotes\n\nMobile: ${this.mobile}\nAddress: ${this.address}\n\nItems:\n${lines.join('\n')}\n\nTotal: ₹${total}\n\nPlease process this order.`);
    window.location.href = `mailto:xxx@gmail.com?subject=${encodeURIComponent('New Skynotes Order')}&body=${body}`;
    // optional: clear cart after opening mail client
    this.cart.clear();
  }
}

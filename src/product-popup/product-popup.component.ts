import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../product-list/product-list.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.css']
})
export class ProductPopupComponent {
  @Input() product!: Product;
  @Output() close = new EventEmitter<void>();

  currentIdx = 0;
  qty = 0;

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.qty = this.cart.getQuantity(this.product.id);
    this.cart.cartChanged.subscribe(()=> this.qty = this.cart.getQuantity(this.product.id));
  }

  prev() { this.currentIdx = (this.currentIdx - 1 + this.product.images.length) % this.product.images.length; }
  next() { this.currentIdx = (this.currentIdx + 1) % this.product.images.length; }

  inc() { this.cart.addItem(this.product, 1); }
  dec() { this.cart.addItem(this.product, -1); }

  onOverlay(e: MouseEvent) { if ((e.target as HTMLElement).classList.contains('overlay')) this.close.emit(); }
}

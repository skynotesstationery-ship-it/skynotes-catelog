import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product-list/product-list.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() view = new EventEmitter<Product>();

  qty = 0;

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.qty = this.cart.getQuantity(this.product.id);
    this.cart.cartChanged.subscribe(() => {
      this.qty = this.cart.getQuantity(this.product.id);
    });
  }

  addToCart() {
    this.cart.addItem(this.product, 1);
  }

  inc() {
    this.cart.addItem(this.product, 1);
  }

  dec() {
    this.cart.addItem(this.product, -1);
  }

  open() {
    this.view.emit(this.product);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/product-list.component';

export interface CartItem {
  product: Product;
  qty: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private key = 'skynotes_cart';
  private _cartChanged = new BehaviorSubject<void>(undefined);
  cartChanged = this._cartChanged.asObservable();

  private load(): CartItem[] {
    try {
      const raw = localStorage.getItem(this.key);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private save(items: CartItem[]) {
    localStorage.setItem(this.key, JSON.stringify(items));
    this._cartChanged.next();
  }

  items(): CartItem[] {
    return this.load();
  }

  findItem(id: string) {
    return this.load().find(i => i.product.id === id);
  }

  addItem(product: Product, delta: number) {
    const items = this.load();
    const idx = items.findIndex(i => i.product.id === product.id);
    if (idx === -1 && delta > 0) {
      items.push({ product, qty: Math.max(0, delta) });
    } else if (idx >= 0) {
      items[idx].qty += delta;
      if (items[idx].qty <= 0) items.splice(idx, 1);
    }
    this.save(items);
  }

  addItemById(id: string, delta: number) {
    const items = this.load();
    const idx = items.findIndex(i => i.product.id === id);
    if (idx >= 0) {
      items[idx].qty += delta;
      if (items[idx].qty <= 0) items.splice(idx, 1);
      this.save(items);
    }
  }

  removeItem(id: string) {
    const items = this.load().filter(i => i.product.id !== id);
    this.save(items);
  }

  getQuantity(id: string) {
    const it = this.findItem(id);
    return it ? it.qty : 0;
  }

  totalCount() {
    return this.load().reduce((s, i) => s + i.qty, 0);
  }

  totalPrice() {
    return this.load().reduce((s, i) => s + i.qty * (i.product.price || 0), 0);
  }

  clear() {
    localStorage.removeItem(this.key);
    this._cartChanged.next();
  }
}

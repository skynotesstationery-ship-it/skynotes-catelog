import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductPopupComponent } from '../product-popup/product-popup.component';
import { CartService } from '../cart.service';
import { ProductCardComponent } from '../product-card/product-card.component';

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  desc?: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductPopupComponent, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  search = '';
 // inside ProductListComponent
products: Product[] = [
  {
    id: '1',
    name: 'Capybara Game Diary A7',
    price: 83,
    images: [
      'assets/Products/Diary/Capybara_Game_Diary_A7/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Diary/Capybara_Game_Diary_A7/2.JPG' // notebook close up, Pixabay :contentReference[oaicite:4]{index=4}
    ],
    desc: '80 pages ruled notebook.'
  },
  {
    id: '2',
    name: 'Fancy Pocket Diary A7',
    price: 90,
    images: [
      'assets/Products/Diary/Fancy_Pocket_Diary_A7/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Diary/Fancy_Pocket_Diary_A7/2.JPG'
    ],
    desc: 'Set of 5 smooth gel pens of assorted colors.'
  },
  {
    id: '3',
    name: 'Pocket notes A7',
    price: 49,
    images: [
      'assets/Products/Diary/Pocket_notes_A7/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Diary/Pocket_notes_A7/2.JPG'
    ],
    desc: 'A4 sketchbook, great for pencils & charcoal.'
  },
  {
    id: '4',
    name: 'Spiral notes A5',
    price: 49,
    images: [
      'assets/Products/Diary/Spiral_notes_A5/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Diary/Spiral_notes_A5/2.JPG'
    ],
    desc: '120-page spiral notebook with thick paper.'
  },
  {
    id: '5',
    name: 'Spiral Pocket Diary A5',
    price: 129,
    images: [
      'assets/Products/Diary/Spiral_Pocket_Diary_A5/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Diary/Spiral_Pocket_Diary_A5/2.JPG'
    ],
    desc: '12-inch (30cm) wooden ruler.'
  },
  {
    id: '6',
    name: 'Spiral Pocket Diary A7',
    price: 49,
    images: [
      'assets/Products/Diary/Spiral_Pocket_Diary_A7/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Diary/Spiral_Pocket_Diary_A7/2.JPG'
    ],
    desc: 'Set of 24 color pencils ideal for drawing & coloring.'
  },
  {
    id: '7',
    name: 'Spiral pocket notes A7',
    price: 90,
    images: [
      'assets/Products/Diary/Spiral_pocket_notes_A7/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Diary/Spiral_pocket_notes_A7/2.JPG'
    ],
    desc: 'Fine tip black permanent marker.'
  },
  {
    id: '8',
    name: 'Unicon Diary A5',
    price: 90,
    images: [
      'assets/Products/Diary/Unicon_Diary_A5/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Diary/Unicon_Diary_A5/2.JPG'
    ],
    desc: 'Fine tip black permanent marker.'
  },
  {
    id: '9',
    name: 'Correction tape',
    price: 29,
    images: [
      'assets/Products/Others/Correction tape/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Others/Correction tape/2.JPG'
    ],
    desc: 'Fine tip black permanent marker.'
  },
  {
    id: '10',
    name: 'GlueStick',
    price: 37,
    images: [
      'assets/Products/Others/GlueStick/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Others/GlueStick/2.JPG'
    ],
    desc: 'Fine tip black permanent marker.'
  },
   {
    id: '11',
    name: 'MiniCalci',
    price: 69,
    images: [
      'assets/Products/Others/MiniCalci/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Others/MiniCalci/2.JPG'
    ],
    desc: 'Fine tip black permanent marker.'
  },
    {
    id: '12',
    name: 'KuromiPen',
    price: 79,
    images: [
      'assets/Products/Pen Pencils/KuromiPen/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Pen Pencils/KuromiPen/2.JPG'
    ],
    desc: 'Fine tip black permanent marker.'
  },
    {
    id: '13',
    name: 'SpacePencil',
    price: 19,
    images: [
      'assets/Products/Pen Pencils/SpacePencil/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Pen Pencils/SpacePencil/2.JPG'
    ],
    desc: 'Fine tip black permanent marker.'
  },
   {
    id: '14',
    name: 'Kuromi',
    price: 135,
    images: [
      'assets/Products/Pen stand/Kuromi/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Pen stand/Kuromi/2.JPG'
    ],
    desc: 'Fine tip black permanent marker.'
  },
   {
    id: '15',
    name: 'Normal',
    price: 165,
    images: [
      'assets/Products/Pen stand/Normal/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Pen stand/Normal/2.JPG'
    ],
    desc: 'Fine tip black permanent marker.'
  },
   {
    id: '16',
    name: 'Table Dustbin',
    price: 135,
    images: [
      'assets/Products/Pen stand/Table Dustbin/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Pen stand/Table Dustbin/2.JPG'
    ],
    desc: 'Fine tip black permanent marker.'
  },
    {
    id: '17',
    name: 'Kuromi',
    price: 349,
    images: [
      'assets/Products/Pouch/Kuromi/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Pouch/Kuromi/2.JPG'
    ],
    desc: 'Fine tip black permanent marker.'
  },
    {
    id: '18',
    name: 'Kuromi2',
    price: 210,
    images: [
      'assets/Products/Pouch/Kuromi2/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Pouch/Kuromi2/2.JPG'
    ],
    desc: 'Fine tip black permanent marker.'
  },
   {
    id: '19',
    name: 'aeroplane',
    price: 79,
    images: [
      'assets/Products/Sharpener/aeroplane/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Sharpener/aeroplane/2.JPG'
    ],
    desc: 'Fine tip black permanent marker.'
  },
    {
    id: '20',
    name: 'Crystal',
    price: 49,
    images: [
      'assets/Products/Sharpener/Crystal/1.JPG', // notebook + pen on table, Unsplash :contentReference[oaicite:3]{index=3}
      'assets/Products/Sharpener/Crystal/2.JPG'
    ],
    desc: 'Fine tip black permanent marker.'
  }
];


  selectedProduct: Product | null = null;

  constructor(private cart: CartService) {}

  filtered() {
    const s = this.search.trim().toLowerCase();
    if (!s) return this.products;
    return this.products.filter(p => p.name.toLowerCase().includes(s) || (p.desc || '').toLowerCase().includes(s));
  }

  openProduct(product: Product) { this.selectedProduct = product; }
  closePopup() { this.selectedProduct = null; }
}

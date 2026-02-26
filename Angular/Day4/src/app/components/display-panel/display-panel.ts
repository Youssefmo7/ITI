import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../card/card';

type Product = {
  id: number,
  name: any
  desc: any
  price: any
  favorite: any
}

@Component({
  selector: 'app-display-panel',
  imports: [Card],
  templateUrl: './display-panel.html',
  styleUrl: './display-panel.css',
})

export class DisplayPanel {
  @Input() products!: Product[];
  
  @Output() addToFavoritesEvent = new EventEmitter<Product>();
  @Output() deleteProductEvent = new EventEmitter<Product>();

  addToFavorites(product: Product) {
    this.addToFavoritesEvent.emit(product);
  }
  deleteProduct(product: Product) {
    this.deleteProductEvent.emit(product);
  }
}

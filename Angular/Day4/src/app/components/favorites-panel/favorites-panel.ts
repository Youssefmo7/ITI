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
  selector: 'app-favorites-panel',
  imports: [Card],
  templateUrl: './favorites-panel.html',
  styleUrl: './favorites-panel.css',
})

export class FavoritesPanel {
  @Input() favorites!: Product[];
    
  @Output() addToFavoritesEvent = new EventEmitter<Product>();
  @Output() deleteProductEvent = new EventEmitter<Product>();

  addToFavorites(product: Product) {
    this.addToFavoritesEvent.emit(product);
  }
  deleteProduct(product: Product) {
    this.deleteProductEvent.emit(product);
  }
}

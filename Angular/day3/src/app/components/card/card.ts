import { Component, EventEmitter, Input, Output } from '@angular/core';

type Product = {
  id: number,
  name: any
  desc: any
  price: any
  favorite: any
}

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() product!: Product;

  @Output() addToFavoritesEvent = new EventEmitter<Product>();
  @Output() deleteProductEvent = new EventEmitter<Product>();

  addToFavorites() {
    if(this.product.favorite) return;
    this.product.favorite = true;
    this.addToFavoritesEvent.emit(this.product);
  }
  deleteProduct() {
    this.deleteProductEvent.emit(this.product);
  }
}

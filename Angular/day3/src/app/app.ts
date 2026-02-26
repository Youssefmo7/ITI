import { Component } from '@angular/core';
import { InputForm } from './components/input-form/input-form'
import { DisplayPanel } from './components/display-panel/display-panel';
import { FavoritesPanel } from "./components/favorites-panel/favorites-panel";

type Product = {
  id: number,
  name: any
  desc: any
  price: any
  favorite: any
}

@Component({
  selector: 'app-root',
  imports: [InputForm, DisplayPanel, FavoritesPanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  products : Product[] = []
  favorites : Product[] = []
  notification = "";

  OnNotify(message: string) {
    this.notification = message;
    this.deleteNotification();
  }
  deleteNotification() {
    setTimeout(() => {
      this.notification = "";
    }, 3000);
  }

  onAddProduct(product: Product) {
    this.products.push(product);
  }

  onAddToFavorites(product: Product) {
    this.favorites.push(product);
  }

  onDeleteProduct(product: Product) {
    this.favorites = this.favorites.filter(p => p.id != product.id);
    this.products = this.products.filter(p => p.id != product.id);
  }
}

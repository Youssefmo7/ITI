import { Component, EnvironmentInjector, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

type Product = {
  id: number,
  name: any
  desc: any
  price: any
  favorite: any
}

@Component({
  selector: 'app-input-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './input-form.html',
  styleUrl: './input-form.css',
})

export class InputForm {
  @Output() addProduct = new EventEmitter<Product>();
  @Output() notify = new EventEmitter<string>();

  idTracker = 0;

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    desc: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
    price: new FormControl(0, [Validators.required, Validators.min(10)])
  });

  get name() {
    return this.form.get('name');
  }
  get desc() {
    return this.form.get('desc');
  }
  get price() {
    return this.form.get('price');
  }

  submitProduct() : void {
    if(!this.name?.valid || !this.price?.valid || !this.desc?.valid) {
      this.notify.emit("error");
      return;
    } else {
      this.notify.emit("success");
      this.addProduct.emit({
        id: ++this.idTracker,
        name: this.name.value,
        desc: this.desc.value,
        price: this.price.value,
        favorite: false
      })
      this.form.reset();
    }
  }
}

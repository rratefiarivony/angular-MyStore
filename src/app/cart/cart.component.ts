import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items;
  checkoutForm;

  constructor(private cartService: CartService,
  private formBuilder: FormBuilder,
  private route: Router) { 
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted.', customerData);

    this.cartService.clearCart();
    this.checkoutForm.reset();

    this.route.navigate(['/']);
  }
}
import { Component, EventEmitter, Output } from '@angular/core';

import {SKU, LineItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cart: LineItem[] = [

  ]
  total: number;

  // for (let i of this.cart)
  //   if (i.sku.itemId == $event.itemId){}
  addItem($event: SKU) {
    //find() method returns value of 1st element in the provided array that satisfies the provided testing function
    const i = this.cart.find((v) => v.sku.itemId == $event.itemId)
    if (i) {
      i.quantity++;
    } else {
      const newLineItem = {
        sku: $event,
        quantity: 1
      }
      this.cart.push(newLineItem);
    }
    this.total = this.addTotal();
    //console.log(this.total);
  }

  removeItem($event: SKU) {
    const i = this.cart.find((v) => v.sku.itemId == $event.itemId && v.quantity>1)
    if (i) {
      i.quantity--;
    } else {
      this.cart = this.cart.filter(e=> e.sku.itemId !== $event.itemId)
      }
      this.total = this.addTotal();
      console.log(this.total);
  }

    

  addTotal() {
    let totalPrice = 0;
    for (const item of this.cart) {
      totalPrice = totalPrice + (item.sku.unitPrice * item.quantity)
    }
      //console.log(totalPrice);
      return totalPrice;
    }
  }

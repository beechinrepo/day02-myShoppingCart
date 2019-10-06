import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LineItem } from '../models';
import { SKU, INVENTORY } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  readonly inventory = INVENTORY;

  @Input() cart: LineItem[] = [];

  @Output()
  onRemoveItem = new EventEmitter<SKU>();

  constructor() { }

  ngOnInit() {
  }

  deselectItem(itemId, idx) {
    console.info('item deselected ', itemId, idx);
    this.onRemoveItem.next(this.inventory[idx]);
  }
}

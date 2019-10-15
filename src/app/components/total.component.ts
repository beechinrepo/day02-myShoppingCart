import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  @Input() total: number

  discountCode = 0;
  grandTotal: string;
  
  constructor() { }

  ngOnInit() {
  }
  onKey(event: any) { // without type info
    this.discountCode = event.target.value;
    const sum = (this.total * (this.discountCode / 100));
    this.grandTotal = (this.total - sum).toFixed(2);
  }
}

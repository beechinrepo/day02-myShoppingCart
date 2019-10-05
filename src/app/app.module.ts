import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventoryComponent } from './components/inventory.component';
import { CartComponent } from './components/cart.component';
import { TotalComponent } from './components/total.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    CartComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

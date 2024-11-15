import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { BidComponent } from './pages/bid/bid.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BidComponent,
    HomepageComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule, // Thêm FormsModule vào imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

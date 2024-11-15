import { Component, inject, OnInit } from '@angular/core';
import { Product, ProductService, ProductResponse } from '../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  products: Product[] = [];
  productService = inject(ProductService);
  toast = inject(HotToastService);

  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (response: ProductResponse) => {
        this.products = response.data;
      },
      error: (e) => {
        console.log(e);
        this.toast.error('Error: ' + e.message);
      },
    });
  }

  trackById(index: number, product: Product): string {
    return product._id; 
  }
}

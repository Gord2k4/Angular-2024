import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product, ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];
  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (response) => {
        this.products = response.data;
      },
      error: (error) => {
        // show error
        console.error(error.message);
      },
    });
  }

  handleDeleteProduct(id: string) {
    if (window.confirm('Bạn có chắc chắn xóa không')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.products = this.products.filter((product) => product._id !== id);
        },
        error: (error) => {
          console.error(error.message);
        },
      });
    }
  }
}

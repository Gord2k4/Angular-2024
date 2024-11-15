import { Component, inject, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  productService = inject(ProductService);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productService.getProductDetail(params['id']).subscribe({
        next: ({data}) => (this.product = data),
        error: () => alert('Error'),
      });
    });
  }
}

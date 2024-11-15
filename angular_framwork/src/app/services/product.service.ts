import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export type Product = {
  _id: string; 
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
};

export type ProductResponse = {
  data: Product[];
};
export type ProductDetailResponse = {
  data: Product;
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:3000/products';
  http = inject(HttpClient);

  getAll() {
    return this.http.get<ProductResponse>(this.apiUrl); 
  }

  getProductDetail(id: string) {
    return this.http.get<ProductDetailResponse>(`${this.apiUrl}/${id}`);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  addProduct(data: Product) {
    return this.http.post<Product>(this.apiUrl, data);
  }
  
  editProduct(id: string, data: Product) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, data);
  }
  
  placeBid(productId: string, bidData: { userId: string; amount: number }) {
    return this.http.post(`${this.apiUrl}/${productId}/bids`, bidData);
}

  
  
  
  
  
}

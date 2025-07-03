// src/app/components/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from './product.service';
import { AddProductComponent } from './add-product.component';

declare var bootstrap: any;

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, AddProductComponent],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  loading = true;

  pageTitle = 'Product List Page';

  openModal() {
    const modalEl = document.getElementById('productModal');
    if (modalEl && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    } else {
      console.error('Bootstrap modal not available. Make sure Bootstrap JS is loaded.');
    }
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList();
  }

  onProductAdded() {
    this.productList(); // reload table data

    // Close Bootstrap modal
    const modalEl = document.getElementById('productModal');
    if (modalEl) {
      const modalInstance = bootstrap.Modal.getInstance(modalEl);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  }

  productList() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching products', err);
        this.loading = false;
      }
    });
  }
  selectedProduct: Product | null = null;

  editProduct(product: Product) {
    this.selectedProduct = { ...product }; // Clone to avoid live binding
    const modalEl = document.getElementById('productModal');
    if (modalEl) {
      const modal = new (window as any).bootstrap.Modal(modalEl);
      modal.show();
    }
  }
  onModalClose() {
    this.selectedProduct = null;
  }
}

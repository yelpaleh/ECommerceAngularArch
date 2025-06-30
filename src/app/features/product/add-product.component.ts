import { Component,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html'
})
export class AddProductComponent {
    @Output() productAdded = new EventEmitter<void>();

  product: Omit<Product, 'productId'> = {
    name: '',
    description: '',
    price: 0,
    stockQuantity: 0,
    categoryId: 0
  };

  categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Clothing' },
    { id: 4, name: 'Appliances' }
  ];

  constructor(private productService: ProductService) {}

  onSubmit() {
    this.productService.addProduct(this.product as Product).subscribe({
      next: () => {
        this.productAdded.emit(); // 🔥 Notify parent
        this.product = { name: '', description: '', price: 0, stockQuantity: 0, categoryId: 0 };
      },
      error: (err) => console.error('Add product failed', err)
    });
  }
}

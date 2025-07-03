import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
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
    @Input() product: Product | null = null;
    @Output() refresh = new EventEmitter<void>();
    @Output() close = new EventEmitter<void>();

    @Output() productAdded = new EventEmitter<void>();
    //Local form data object for editing/adding
    formModel: Omit<Product, 'productId'> = {
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

    constructor(private productService: ProductService) { }

ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      // Pre-fill for Edit
      this.formModel = {
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        stockQuantity: this.product.stockQuantity,
        categoryId: this.product.categoryId
      };
    } else {
      this.resetForm();
    }
  }
    
      onSubmit() {
    if (this.product?.productId) {
      const updatedProduct: Product = {
        ...this.formModel,
        productId: this.product.productId
      };
      this.productService.updateProduct(updatedProduct).subscribe(() => {
        this.refresh.emit();
        this.close.emit();
      });
    } else {
      this.productService.addProduct(this.formModel as Product).subscribe(() => {
        this.refresh.emit();
        this.close.emit();
      });
    }
  }

    private resetForm() {
    this.formModel = {
      name: '',
      description: '',
      price: 0,
      stockQuantity: 0,
      categoryId: 0
    };
  }
}

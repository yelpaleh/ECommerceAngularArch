import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [RouterModule,CommonModule],
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
 links = [
    { path: '', label: 'Dashboard' },
    { path: 'about', label: 'About' },
    { path: 'customer', label: 'Customer' },
    { path: 'product', label: 'Product' },
    { path: 'order', label: 'Order' },
    { path: 'report', label: 'Report' },
    { path: 'contact', label: 'Contact' }
  ];
}

import { Component,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private router: Router) {}

    @Output() toggle = new EventEmitter<void>();

  logout() {
    localStorage.removeItem('isLoggedIn');
    location.href = '/login';
  }
}

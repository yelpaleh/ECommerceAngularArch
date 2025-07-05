import { Component } from '@angular/core';
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
logout() {
  localStorage.removeItem('isLoggedIn');
  this.router.navigate(['/login']);
}
}

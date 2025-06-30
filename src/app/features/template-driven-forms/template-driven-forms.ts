import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './template-driven-forms.html',
  styleUrl: './template-driven-forms.css'
})
export class TemplateDrivenForms {
  user = {
    name: '',
    email: '',
    age: null,
    bio: '',
    gender: '',
    subscribe: false,
    country: ''
  };

  onSubmit() {
    console.log('Template-driven form submitted:', this.user);
  }

}

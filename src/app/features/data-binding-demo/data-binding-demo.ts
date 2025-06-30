import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { CommonModule } from '@angular/common';
import { DivHighlight } from '../../shared/directive/div-highlight'; // Importing custom directive  
import { OddEvenDirective } from '../../shared/directive/odd-even-directive'; // Importing custom directive
import { GenderPipeTsPipe } from '../../gender.pipe.ts-pipe';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, DivHighlight, OddEvenDirective, GenderPipeTsPipe],
  templateUrl: './data-binding-demo.html',
  styleUrl: './data-binding-demo.css'
})

export class DataBindingDemo {
  title = 'Angular Data Binding Demo';
  firstname = 'Harshal';

  // Interpolation and Property Binding
  username = 'Harshal';

  //Property Binding
  isButtonDisabled = true;
  // Two-way Binding
  message = '';

  // Attribute Binding
  colSpan = 4;
  userRole = 'admin';

  isActive = true; // For class binding
  hasWarning = true; // For class binding
  isDisabled = true; // For attribute binding
  // Event Handler
  onClick(): void {
    alert('Button clicked!');
  }

  onSubmit(): void {
    alert(`Form submitted with message: ${this.message}`);
  }

  handleInput(e: Event) {
    console.log((e.target as HTMLInputElement).value);
  }
  logFirstname(e: Event) {
    alert(`First Name: ${(e.target as HTMLInputElement).value}`);
    console.log((e.target as HTMLInputElement).value);
  }

  //Pipes Buil-int examples
  today = new Date();

  user = {   name: 'Alex',   gender: false}; // true for Male, false for Female 

  userList = [{   name: 'Alex',   gender: true},
    {   name: 'John',   gender: true},
    {   name: 'Jessy',   gender: false},
    {   name: 'Merry',   gender: false}
  ];
}

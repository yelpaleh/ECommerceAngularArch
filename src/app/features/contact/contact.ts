import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../shared/services/contact.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact  implements OnInit {
  contactForm!: FormGroup;
  submissionSuccess: boolean = false;
  submissionError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submissionSuccess = false;
      this.submissionError = false;
console.log('Form submitted:', this.contactForm.value);
      // Simulate API call
      this.contactService.submitContactForm(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Form submitted successfully:', response);
          this.submissionSuccess = true;
          this.contactForm.reset(); // Clear the form after successful submission
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          this.submissionError = true;
        }
      });
    } else {
      // Mark all fields as touched to display validation errors
      this.contactForm.markAllAsTouched();
    }
  }
}
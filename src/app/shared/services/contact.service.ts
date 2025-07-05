import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, tap, catchError } from 'rxjs/operators';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'YOUR_BACKEND_API_ENDPOINT/contact'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  submitContactForm(formData: ContactForm): Observable<any> {
    // In a real application, you would make an HTTP POST request here:
    // return this.http.post(this.apiUrl, formData);

    // For demonstration, we'll simulate an API call with a delay
    console.log('Simulating form submission:', formData);
    return of({ success: true, message: 'Message sent successfully!' }).pipe(
      delay(1000), // Simulate network delay of 1 second
      tap(() => console.log('Simulated API response received')),
      catchError(error => {
        console.error('Simulated API error:', error);
        throw error; // Re-throw the error for the component to handle
      })
    );
  }
}
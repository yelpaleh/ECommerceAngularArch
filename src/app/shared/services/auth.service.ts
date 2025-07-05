import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../../models/login.model'; // Adjust the import path as necessary
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7044/api/Login'; // Your API base URL

  constructor(private http: HttpClient) {}

  login(credentials: LoginModel): Observable<{ token: string, role: string }> {
    return this.http.post<{ token: string, role: string }>(`${this.apiUrl}/login`, credentials);
  }
 
}

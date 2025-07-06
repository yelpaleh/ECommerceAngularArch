// report.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({ providedIn: 'root' })
export class ReportService {
  private apiUrl = `${environment.apiBaseUrl}`;
//https://localhost:7044/api/Report/orders
  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get<any[]>(`${this.apiUrl}/Customers/customers`);
  }

  getProducts() {
    return this.http.get<any[]>(`${this.apiUrl}/Product`);
  }

  getReport(filters: any) {
    return this.http.get<any[]>(`${this.apiUrl}/Report/orders`, { params: filters });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private apiUrl = 'https://localhost:7044/api/Dashboard/dashboard-summary';

  constructor(private http: HttpClient) {}

  getSummary() {
    return this.http.get<any>(this.apiUrl);
  }
}

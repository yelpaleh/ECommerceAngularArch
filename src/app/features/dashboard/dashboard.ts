import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from './dashboard.service';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {
  stats = [
    { title: 'Total Users', value: 0 },
    { title: 'Orders', value: 0 },
    { title: 'Revenue', value: '$0' },
    { title: 'Pending', value: 0 }
  ];

  barChartOptions: ChartOptions = { responsive: true };
  barChartType: ChartType = 'bar';
  barChartData: ChartData<'bar'> = { labels: [], datasets: [] };

  doughnutChartType: ChartType = 'doughnut';
  doughnutChartData: ChartData<'doughnut'> = { labels: [], datasets: [] };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadSummary();
  }

  loadSummary() {
    this.dashboardService.getSummary().subscribe(data => {
      this.stats = [
        { title: 'Total Users', value: data.totalUsers },
        { title: 'Orders', value: data.totalOrders },
        { title: 'Revenue', value: `$${data.totalRevenue.toLocaleString()}` },
        { title: 'Pending', value: data.pendingOrders }
      ];

      // Bar Chart (Sales by Month)
      this.barChartData = {
        labels: data.salesByMonth.map((m: any) => this.getMonthName(m.month)),
        datasets: [
          {
            label: 'Sales',
            data: data.salesByMonth.map((m: any) => m.sales),
            backgroundColor: '#007bff'
          }
        ]
      };

      // Doughnut Chart (Order Status)
      this.doughnutChartData = {
        labels: data.statusCounts.map((s: any) => s.status),
        datasets: [
          {
            data: data.statusCounts.map((s: any) => s.count),
            backgroundColor: ['#1cc88a', '#f6c23e', '#e74a3b']
          }
        ]
      };
    });
  }

  getMonthName(month: number): string {
    return new Date(0, month - 1).toLocaleString('default', { month: 'short' });
  }
}

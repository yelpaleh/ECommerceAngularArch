import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  stats = [
    { title: 'Total Users', value: 1284 },
    { title: 'Orders', value: 375 },
    { title: 'Revenue', value: '$45K' },
    { title: 'Pending', value: 42 }
  ];

barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartType: ChartType = 'bar';

  barChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [50, 60, 70, 80, 90],
        backgroundColor: '#007bff',
      },
    ],
  };
doughnutChartType: ChartType = 'doughnut';

  doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Completed', 'Pending', 'Cancelled'],
    datasets: [
      {
        data: [250, 90, 35],
        backgroundColor: ['#1cc88a', '#f6c23e', '#e74a3b']
      }
    ]
  };
}

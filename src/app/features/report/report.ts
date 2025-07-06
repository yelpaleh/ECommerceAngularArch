import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-report',
  imports: [CommonModule, FormsModule],
  templateUrl: './report.html',
  styleUrls: ['./report.css']
})
export class Report implements OnInit {
  filters = {
    customerId: '',
    productId: '',
    fromDate: '',
    toDate: ''
  };

  customers: any[] = [];
  products: any[] = [];
  reports: any[] = [];

  currentPage = 1;
  itemsPerPage = 5;
  sortColumn = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.loadInitialData();
    this.search(); // Load initial report data
  }

  loadInitialData() {
    this.reportService.getCustomers().subscribe(res => this.customers = res);
    this.reportService.getProducts().subscribe(res => this.products = res);
  }

  exportToExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.reports);
    const workbook: XLSX.WorkBook = { Sheets: { 'Report': worksheet }, SheetNames: ['Report'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(data, 'OrderReport.xlsx');
  }

  exportToPDF() {
    const doc = new jsPDF();
    const columns = [
      { header: 'Order ID', dataKey: 'orderId' },
      { header: 'Customer', dataKey: 'customerName' },
      { header: 'Product', dataKey: 'productName' },
      { header: 'Qty', dataKey: 'quantity' },
      { header: 'Price', dataKey: 'unitPrice' },
      { header: 'Total', dataKey: 'totalPrice' },
      { header: 'Date', dataKey: 'orderDate' }
    ];
    autoTable(doc, {
      head: [columns.map(c => c.header)],
      body: this.reports.map(row => columns.map(c => row[c.dataKey])),
    });
    doc.save('OrderReport.pdf');
  }
  
  pagedReports: any[] = [];
  totalPages = 1;

  search() {
    this.reportService.getReport(this.filters).subscribe(res => {
      this.reports = res;
      this.applySortingAndPagination();
    });
  }

  changePage(page: number) {
    this.currentPage = page;
    this.applySortingAndPagination();
  }

  sort(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.applySortingAndPagination();
  }

  applySortingAndPagination() {
    let data = [...this.reports];

    // Sort
    if (this.sortColumn) {
      data.sort((a, b) => {
        const valA = a[this.sortColumn];
        const valB = b[this.sortColumn];

        if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    // Pagination
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    this.totalPages = Math.ceil(data.length / this.itemsPerPage);
    this.pagedReports = data.slice(start, end);
  }
    clear() {
      this.filters = { customerId: '', productId: '', fromDate: '', toDate: '' };
      this.reports = [];
    }
}

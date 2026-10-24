import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DashboardService } from '../services/dashboard';
import { throwError } from 'rxjs';

@Component({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  stats: any[] = [];
  errorMessage = '';
  isLoading = true;

  constructor(private dashboardService: DashboardService) {
    // throwError(() => new Error('خطای آزمایشی')).subscribe({
    this.dashboardService.getStats().subscribe({
      next: data => {
        this.stats = data;
        this.errorMessage = '';
        this.isLoading = false;
      },
      error: err => {
        this.errorMessage = 'دریافت اطلاعات داشبورد ناموفق بود.';
        this.isLoading = false;
      }
    });
  }
}

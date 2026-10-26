import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DashboardService } from '../services/dashboard';
import { finalize } from 'rxjs';


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
   
    this.dashboardService.getStats().pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: data => {
        this.stats = data;
        this.errorMessage = '';
      },
      error: err => {
        this.errorMessage = 'دریافت اطلاعات داشبورد ناموفق بود.';
      }
    });

  }
}

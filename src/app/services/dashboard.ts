import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  stats = [
    {
      title: 'تعداد کالاها',
      value: 128,
      description: 'کالاهای ثبت‌شده',
      color: 'text-emerald-600'
    },
    {
      title: 'موجودی انبار',
      value: 840,
      description: 'واحد موجودی نمونه',
      color: 'text-blue-600'
    },
    {
      title: 'فروش امروز',
      value: 24,
      description: 'فاکتور ثبت‌شده نمونه',
      color: 'text-amber-600'
    }
  ];

 getStats(): Observable<any[]> {
    return of(this.stats);
 }
}

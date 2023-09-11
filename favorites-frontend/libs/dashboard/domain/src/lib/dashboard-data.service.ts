import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  private _data$$ = new BehaviorSubject<DashboardDataItem[]>([
    {
      title: 'Dashboard',
      description: 'This is the dashboard'
    },
    {
      title: 'Favorites count',
      description: 'You have 186 favourites'
    }
  ]);

  public getDashboardData() {
    return this._data$$.asObservable();
  }
}

export interface DashboardDataItem {
  title: string;
  description: string;
}




import { Component } from '@angular/core';
import { DashboardDataService } from '@favorites-frontend/dashboard-domain';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  constructor(public data: DashboardDataService){
  }
}

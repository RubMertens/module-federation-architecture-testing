import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RouterModule } from '@angular/router';
import { DashboardDomainModule } from '@favorites-frontend/dashboard-domain';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardPageComponent,
      },
    ]),
    CommonModule,
    DashboardDomainModule,
    MatGridListModule,
  ],
  declarations: [DashboardPageComponent],
})
export class DashboardFeaturesModule {}

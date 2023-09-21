import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RouterModule } from '@angular/router';
import { DashboardDomainModule } from '@favorites-frontend/dashboard-domain';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedUiModule } from "@favorites-frontend/shared-ui";

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
    MatButtonModule,
    MatSnackBarModule,
    SharedUiModule
  ],
  declarations: [DashboardPageComponent],
})
export class DashboardFeaturesModule {}

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardDataService } from '@favorites-frontend/dashboard-domain';
import { FavoritesAppError } from '@favorites-frontend/shared-contracts';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  private count = 0;
  constructor(public data: DashboardDataService, private snackBar: MatSnackBar){
  }

  public throwError(){
    throw new FavoritesAppError('Error on the dashboards page ' + this.count++, {
      label: 'SNACKBAR',
      action : (c) =>
      {
        const handle = this.snackBar.open('Custom action for ' + c.error.message, 'DISMISS');
        handle.onAction().subscribe(() => {
          c.dismiss();
        })
      }
    })

  }
}

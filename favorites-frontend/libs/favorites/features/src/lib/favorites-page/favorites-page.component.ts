import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorWithActions } from '@favorites-frontend/shared-core';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})export class FavoritesPageComponent {
  private count = 0;

  constructor(private snackbar: MatSnackBar){}

  public error(){
    throw new ErrorWithActions('My custom error ' + this.count++, {
      label: "SNACKBAR",
      action: (context) => {
        console.log(context);
        this.snackbar.open("Custom action for " + context.error.message);
    }});
  }
}

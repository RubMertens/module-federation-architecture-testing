import { Component } from '@angular/core';
import { TestDataService } from '@favorites-frontend/shared-core';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesPageComponent {
  private count = 0;

  public error(){
    throw new Error('My custom error ' + this.count++);
  }
}

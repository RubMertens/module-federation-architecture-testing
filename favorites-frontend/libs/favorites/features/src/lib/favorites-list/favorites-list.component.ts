import { Component } from '@angular/core';
import { Favorite, FavoritesDataService } from '@favorites-frontend/favorites-domain';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss'],
})
export class FavoritesListComponent {

  constructor(public data: FavoritesDataService){

  }

  public delete(favorite: Favorite) {
    this.data.deleteFavorite(favorite.id);
  }
  public edit(favorite: Favorite){}
}

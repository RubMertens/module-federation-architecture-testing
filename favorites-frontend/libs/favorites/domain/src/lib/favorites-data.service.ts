import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesDataService {


  private data$$ = new BehaviorSubject<Favorite[]>([
    {
      id: 1,
      entry: 'Angular',
      comment: 'Angular is a platform for building mobile and desktop web applications.',
    }
  ]);

  public getFavorites() {
    return this.data$$.asObservable();
  }

  public addFavorite(favorite: AddFavorite) {
    const favorites = this.data$$.value;
    //get the max id from the existing favorites
    const id = Math.max(...favorites.map(f => f.id)) + 1;
    this.data$$.next([...favorites, { id, ...favorite }]);
  }

  public deleteFavorite(id: number){
    const favorites = this.data$$.value;
    this.data$$.next(favorites.filter(f => f.id !== id));
  }
}


export interface Favorite {
  id:number;
  entry:string;
  comment:string | null;
}

export interface AddFavorite {
  entry:string;
  comment:string | null;
}

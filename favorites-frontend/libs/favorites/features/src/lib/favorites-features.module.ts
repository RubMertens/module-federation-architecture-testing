import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: FavoritesPageComponent}
    ]),
    CommonModule],
  declarations: [FavoritesPageComponent],
})
export class FavoritesFeaturesModule {}

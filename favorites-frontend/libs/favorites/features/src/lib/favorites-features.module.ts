import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { AddFavoriteFormComponent } from './add-favorite-form/add-favorite-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: FavoritesPageComponent }]),
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
  ],
  declarations: [
    FavoritesPageComponent,
    FavoritesListComponent,
    AddFavoriteFormComponent,
  ],
})
export class FavoritesFeaturesModule {}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FavoritesDataService } from '@favorites-frontend/favorites-domain';

@Component({
  selector: 'app-add-favorite-form',
  templateUrl: './add-favorite-form.component.html',
  styleUrls: ['./add-favorite-form.component.scss'],
})
export class AddFavoriteFormComponent {

  public form = this.fb.nonNullable.group({
    entry: ['', Validators.required],
    comment: [null as string | null]
  });

  constructor(private fb: FormBuilder, private data: FavoritesDataService){

  }

  public submit(): void {
    this.form.markAllAsTouched();
    if(this.form.invalid){
      return;
    }
    const f = this.form.getRawValue()
    this.data.addFavorite(f);

    this.form.reset();
  }
}

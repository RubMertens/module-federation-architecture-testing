import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsOverviewListComponent } from './comments-overview-list/comments-overview-list.component';
import { CommentsEditorComponent } from './comments-editor/comments-editor.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularEditorModule,
    RouterModule.forChild([
      {
        path: ':reference',
        component: CommentsOverviewListComponent,
      },
      {
        path: ':reference/edit/:id',
        component: CommentsEditorComponent,
      },
    ]),
    MatListModule,
    MatCardModule,
    HttpClientModule
  ],
  declarations: [CommentsOverviewListComponent, CommentsEditorComponent],
})
export class CommentsFeaturesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ErrorToolbarComponent } from './error-toolbar/error-toolbar.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  declarations: [ErrorToolbarComponent],
  exports: [ErrorToolbarComponent],
})
export class SharedUiModule {}

export * from './error-toolbar/error-toolbar.component';

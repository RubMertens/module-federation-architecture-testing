import { Component } from '@angular/core';
import { ErrorToolbarService } from '@favorites-frontend/shared-core';

@Component({
  selector: 'app-error-toolbar',
  templateUrl: './error-toolbar.component.html',
  styleUrls: ['./error-toolbar.component.scss'],
})
export class ErrorToolbarComponent {
  constructor(public service: ErrorToolbarService) { }
}

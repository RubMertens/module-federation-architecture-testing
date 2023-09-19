import { Component, OnDestroy, OnInit } from '@angular/core';
// import { ErrorToolbarService } from '@favorites-frontend/shared-core';
import { Subject, fromEvent, map, takeUntil } from 'rxjs';
import { CustomEventBasedErrorToolbarService } from './error-toolbar.service';

@Component({
  selector: 'app-error-toolbar',
  templateUrl: './error-toolbar.component.html',
  styleUrls: ['./error-toolbar.component.scss'],
  providers: [
    CustomEventBasedErrorToolbarService
  ]
})
export class ErrorToolbarComponent {


  constructor(public service: CustomEventBasedErrorToolbarService) {

  }





}

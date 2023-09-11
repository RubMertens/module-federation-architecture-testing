import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-app-entry',
  template: `<router-outlet></router-outlet>`,
  styles: [`
  :host {
    height: 100%;
    display:block;
  }
  `],
})
export class RemoteEntryComponent {}

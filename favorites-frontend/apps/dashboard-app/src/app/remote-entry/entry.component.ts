import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-app-entry',
  template: `<h1>Dashboard App</h1> <button mat-button color="primary">test</button>`,
  styles: [`
  :host {
    height: 100%;
    display:block;
  }
  `],
})
export class RemoteEntryComponent {}

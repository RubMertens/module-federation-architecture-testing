import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TestDataService {

  public data$ = new BehaviorSubject<string>('');
  public nextData() {
    this.data$.next('Hello World + '+ Math.random());
  }

}

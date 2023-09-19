import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  concat,
  concatAll,
  map,
  of,
  race,
  share,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  timer,
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AngularBasedErrorToolbarService {

  public notificationQueue$$ = new Subject<
    Observable<ToolbarNotificationOutput | null>
  >();
  public notification$ = this.notificationQueue$$.pipe(
    concatAll(),
    share(),
  );

  public notify(notification: ToolbarNotification | null) {
    if (notification) {
      const dismiss$ = new Subject<void>();
      const outputNotification: ToolbarNotificationOutput = {
        ...notification,
        dismiss: () => {
          dismiss$.next();
        }
      }

      const notificationWithTimeout$ =race(
        timer(notification.duration).pipe(take(1)),
        dismiss$.pipe(take(1)),
      ).pipe(
        map(() => null),
        startWith(outputNotification), // order of startWith is important.
      );
      this.notificationQueue$$.next(notificationWithTimeout$);
    }

  }
}

export interface ToolbarNotificationOutput extends ToolbarNotification {
  dismiss: () => void;
}

export interface ToolbarNotification {
  message: string;
  duration: number;

  actions?: ToolbarNotificationAction[];
}

export interface ToolbarNotificationAction {
  label: string;
  action: () => void;
}

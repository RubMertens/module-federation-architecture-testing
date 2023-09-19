import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, concat, concatAll, concatMap, fromEvent, map, of, race, share, startWith, take, takeUntil, timer } from 'rxjs';

@Injectable()
export class CustomEventBasedErrorToolbarService implements OnDestroy {
  private destroy$$ = new Subject<void>();
  public notification$: Observable<ToolbarNotification | null>;

  constructor() {
    this.notification$ = fromEvent(document, 'error-notification').pipe(
      takeUntil(this.destroy$$),
      map(e => (e as CustomEvent).detail as ErrorNotification),
      concatMap(notification => {
        const dismiss$ = new Subject<void>();
        const outputNotification: ToolbarNotification = {
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
        return notificationWithTimeout$;
      }),
      share(),
      );
  }
  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

}

interface ErrorNotification {
  message: string;
  duration: number;
  actions?: ErrorNotificationAction[];
}

export interface ToolbarNotification {
  message: string;
  duration: number;
  actions?: ErrorNotificationAction[];
  dismiss: () => void;
}
export interface ErrorNotificationAction {
  label: string;
  action: () => void;
}

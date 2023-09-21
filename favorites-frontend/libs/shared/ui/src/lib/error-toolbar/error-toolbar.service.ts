import { Injectable, OnDestroy } from '@angular/core';
import {
  Observable,
  Subject,
  concatMap,
  fromEvent,
  map,
  race,
  share,
  startWith,
  take,
  takeUntil,
  timer,
} from 'rxjs';

import { FavoritesAppError, FavoritesErrorEvent } from "@favorites-frontend/shared-contracts";

@Injectable()
export class CustomEventBasedErrorToolbarService implements OnDestroy {
  private destroy$$ = new Subject<void>();
  public notification$: Observable<ToolbarNotification | null>;

  constructor() {
    this.notification$ = fromEvent(document, 'error-notification').pipe(
      takeUntil(this.destroy$$),
      map((e) => (e as CustomEvent).detail as FavoritesErrorEvent),
      concatMap(this.toDismissibleNotification$),
      share()
    );
  }
  private toDismissibleNotification$(notification: FavoritesErrorEvent) {
    const dismiss$ = new Subject<void>();
    const outputNotification: ToolbarNotification = {
      ...notification,
      dismiss: () => {
        dismiss$.next();
      },
      actions: notification.actions?.map((action) => ({
        ...action,
        action: () => {
          action.action({
            error: notification.error,
            dismiss: outputNotification.dismiss,
          });
        },
      })),
    };
    const notificationWithTimeout$ = race(
      timer(notification.duration).pipe(take(1)),
      dismiss$.pipe(take(1))
    ).pipe(
      map(() => null),
      startWith(outputNotification) // order of startWith is important.
    );
    return notificationWithTimeout$;
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }
}



export interface ToolbarNotification {
  message: string;
  duration: number;
  actions?: ToolbarNotificationAction[];
  dismiss: () => void;
}
export interface ToolbarNotificationAction {
  label: string;
  action: () => void;
}

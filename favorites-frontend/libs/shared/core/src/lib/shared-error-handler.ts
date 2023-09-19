import { ErrorHandler, Injectable } from '@angular/core';
import { AngularBasedErrorToolbarService } from './error-toolbar.service';

@Injectable()
export class SharedErrorHandler implements ErrorHandler {
  constructor(private errorToolbarService: AngularBasedErrorToolbarService) {}
  handleError(error: any): void {
    console.error('SHARED HANDLER', error);

    if(error instanceof ErrorWithActions){
      const actions = Array.isArray(error.actions)
      ? error.actions
      : [error.actions];
      document.dispatchEvent(
        new CustomEvent('error-notification', {
          detail: {
            message: error.message,
            duration: 3000,
            actions,
          },
        })
      );

      return;
    }

    document.dispatchEvent(
      new CustomEvent('error-notification', {
        detail: {
          message: error.message,
          duration: 3000,
        },
      })
    );
    // this.errorToolbarService.notify({
    //   message: error.message,
    //   duration: 3000,
    //   actions: [
    //     {
    //       label: 'CUSTOM',
    //       action: () => {
    //         console.log('custom action');
    //       },
    //     },
    //   ],
    // });
  }
}


export interface ErrorAction{
  label: string;
  action: () => void;
}

export class ErrorWithActions  extends Error {
  constructor(message: string, public actions: ErrorAction | ErrorAction[]) {
    super(message);
  }
}

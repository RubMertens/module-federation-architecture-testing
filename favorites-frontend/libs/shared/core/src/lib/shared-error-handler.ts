import { ErrorHandler, Injectable } from '@angular/core';
import { AngularBasedErrorToolbarService } from './error-toolbar.service';
import { ErrorAction, FavoritesAppError } from "@favorites-frontend/shared-contracts";

@Injectable()
export class SharedErrorHandler implements ErrorHandler {
  constructor(private errorToolbarService: AngularBasedErrorToolbarService) {}
  handleError(error: any): void {
    console.error('SHARED HANDLER', error);
      document.dispatchEvent(
        new CustomEvent('error-notification', {
          detail: {
            message: error.message,
            duration: 3000,
            actions: this.extractActions(error),
            error
          } ,
        })
      );

  }

  private extractActions(error: any): ErrorAction[] | undefined {

    if(error instanceof FavoritesAppError){
      return Array.isArray(error.actions) ? error.actions : [error.actions];
    }

    let actions: ErrorAction[] | undefined = undefined;
    if ('actions' in error) {
      if (Array.isArray(error['actions'])) {
        if(error['actions'].length > 0 && this.isErrorAction(error['actions'][0])){
          actions = error['actions'];
        }
      } else {
        //not an array
        if (this.isErrorAction(error['actions'])) {
          actions = [error['actions']];
        }
      }
    }
    return actions;
  }

  private isErrorAction(action: any): action is ErrorAction {
    return action && typeof action.label === 'string' && typeof action.action === 'function';
  }
}






import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorToolbarService } from './error-toolbar.service';

@Injectable()
export class SharedErrorHandler implements ErrorHandler {


  constructor(private errorToolbarService: ErrorToolbarService){}
  handleError(error: any): void {
    console.error("SHARED HANDLER", error);

    this.errorToolbarService.notify({
      message: error.message,
      duration: 3000,
      actions: [
        {
          label: "CUSTOM",
          action: () => {
            console.log("custom action");
          }
        }
      ]
    })
  }
}

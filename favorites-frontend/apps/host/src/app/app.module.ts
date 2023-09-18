import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SharedCoreModule, SharedErrorHandler } from '@favorites-frontend/shared-core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    SharedCoreModule,
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: SharedErrorHandler
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}

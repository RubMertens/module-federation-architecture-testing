import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import {MatButtonModule} from '@angular/material/button';
import {SharedCoreModule} from '@favorites-frontend/shared-core';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), MatButtonModule, SharedCoreModule],
  providers: [],
})
export class RemoteEntryModule {}

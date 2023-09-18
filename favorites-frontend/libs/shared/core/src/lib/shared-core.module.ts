import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class SharedCoreModule {}


export * from "./shared-error-handler";
export * from "./test-data.service";
export * from "./error-toolbar.service"

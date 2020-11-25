import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { RouterModule } from '@angular/router';

import { SRoutes } from '../routes/routes';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, RouterModule.forRoot(SRoutes)],
  providers: [],
  bootstrap: [RootComponent],
})
export class RootModule {}

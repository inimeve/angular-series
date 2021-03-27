import { NgModule } from '@angular/core';

import { GoodbyeRoutingModule } from './goodbye-routing.module';

import { GoodbyeComponent } from './goodbye.component';


@NgModule({
  imports: [GoodbyeRoutingModule],
  declarations: [GoodbyeComponent],
  exports: [GoodbyeComponent]
})
export class GoodbyeModule { }

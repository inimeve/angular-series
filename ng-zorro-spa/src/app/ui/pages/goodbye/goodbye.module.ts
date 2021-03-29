import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { GoodbyeRoutingModule } from './goodbye-routing.module';
import { GoodbyeComponent } from './goodbye.component';

const COMPONENTS: Type<any>[] = [
  GoodbyeComponent
];

@NgModule({
  imports: [
    SharedModule,
    GoodbyeRoutingModule
  ],
  declarations: [...COMPONENTS]
})
export class GoodbyeModule { }

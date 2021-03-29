import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

const COMPONENTS: Type<any>[] = [
  WelcomeComponent
];

@NgModule({
  imports: [
    SharedModule,
    WelcomeRoutingModule
  ],
  declarations: [...COMPONENTS]
})
export class WelcomeModule { }

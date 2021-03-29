import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutBasicComponent } from './basic/basic.component';

const COMPONENTS: Type<any>[] = [
  LayoutBasicComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class LayoutModule { }

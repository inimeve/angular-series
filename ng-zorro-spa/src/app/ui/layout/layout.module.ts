import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';

const COMPONENTS: Type<any>[] = [
  BasicLayoutComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class LayoutModule { }

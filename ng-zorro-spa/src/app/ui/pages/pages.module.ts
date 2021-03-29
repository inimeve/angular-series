import { NgModule, Type } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';

const COMPONENTS: Type<any>[] = [
  DashboardComponent
];

const UI_MODULES: Type<any>[] = [
  SharedModule,
  LayoutModule,
  CoreModule
];

@NgModule({
  imports: [...UI_MODULES, PagesRoutingModule],
  declarations: [...COMPONENTS]
})
export class PagesModule { }

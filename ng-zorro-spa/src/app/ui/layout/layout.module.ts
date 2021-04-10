import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

const COMPONENTS: Type<any>[] = [
  BasicLayoutComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS, HeaderComponent, SidebarComponent, FooterComponent]
})
export class LayoutModule { }

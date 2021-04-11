import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetsRoutingModule } from './vets-routing.module';
import { VetsComponent } from './vets.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [VetsComponent],
  imports: [
    CommonModule,
    VetsRoutingModule,
    SharedModule
  ]
})
export class VetsModule { }

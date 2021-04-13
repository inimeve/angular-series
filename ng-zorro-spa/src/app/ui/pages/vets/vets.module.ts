import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetsRoutingModule } from './vets-routing.module';
import { VetsComponent } from './vets.component';
import { SharedModule } from '../../shared/shared.module';
import { VetCardComponent } from './vet-card/vet-card.component';


@NgModule({
  declarations: [VetsComponent, VetCardComponent],
  imports: [
    CommonModule,
    VetsRoutingModule,
    SharedModule
  ]
})
export class VetsModule { }

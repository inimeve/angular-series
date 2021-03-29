import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ZORRO_MODULES } from './zorro.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ...ZORRO_MODULES
  ],
  exports: [
    CommonModule,
    RouterModule,
    ...ZORRO_MODULES
  ]
})
export class SharedModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RxjsLessonsRoutingModule } from './rxjs-lessons-routing.module';
import { RxjsLessonsComponent } from './rxjs-lessons.component';



@NgModule({
  declarations: [RxjsLessonsComponent],
  imports: [
    CommonModule,
    RxjsLessonsRoutingModule
  ]
})
export class RxjsLessonsModule { }

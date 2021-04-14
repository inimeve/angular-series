import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsLessonsComponent } from './rxjs-lessons.component';

const routes: Routes = [
  { path: '', component: RxjsLessonsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsLessonsRoutingModule { }

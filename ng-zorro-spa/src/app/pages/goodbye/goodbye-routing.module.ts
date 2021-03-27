import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodbyeComponent } from './goodbye.component';

const routes: Routes = [
  { path: '', component: GoodbyeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodbyeRoutingModule { }

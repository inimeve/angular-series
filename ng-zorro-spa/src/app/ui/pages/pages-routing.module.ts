import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicLayoutComponent } from '../layout/basic-layout/basic-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BasicLayoutComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
      { path: 'goodbye', loadChildren: () => import('./goodbye/goodbye.module').then(m => m.GoodbyeModule) },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'vets', loadChildren: () => import('./vets/vets.module').then(m => m.VetsModule) },
      { path: 'pets', loadChildren: () => import('./pets/pets.module').then(m => m.PetsModule) },
      { path: 'rxjs-lessons', loadChildren: () => import('./rxjs-lessons/rxjs-lessons.module').then(m => m.RxjsLessonsModule) },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

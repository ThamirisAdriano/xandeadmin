import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path: 'list-series',
        loadChildren: () => import('./modules/list-birthday/list-birthday.module').then((module) => module.ListBirthdayModule)
      },
      {
        path: 'edit-birthday/:id',
        loadChildren: () => import('./modules/edit-birthday/edit.birthday.module').then((module) => module.EditBirthdayModule)
      }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

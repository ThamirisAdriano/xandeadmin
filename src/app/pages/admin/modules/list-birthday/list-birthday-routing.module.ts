import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBirthdayComponent } from './list-birthday.component';

const routes: Routes = [
  {
    path:'',
    component: ListBirthdayComponent
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ListBirthdayRoutingModule { }
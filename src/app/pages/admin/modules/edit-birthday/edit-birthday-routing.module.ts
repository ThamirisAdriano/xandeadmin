import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBirthdayComponent } from './edit-birthday.component';


const routes: Routes = [
  {
    path: '',
    component: EditBirthdayComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditBirthdayRoutingModule { }
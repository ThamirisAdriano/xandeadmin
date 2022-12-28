import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBirthdayComponent } from './list-birthday.component';
import { ListBirthdayRoutingModule } from './list-birthday-routing.module';



@NgModule({
  declarations: [
    ListBirthdayComponent
  ],
  imports: [
    CommonModule,
    ListBirthdayRoutingModule
  ]
})
export class ListBirthdayModule { }
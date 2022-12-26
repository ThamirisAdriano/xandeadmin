import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBirthdayComponent } from './edit-birthday.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditBirthdayRoutingModule } from './edit-birthday-routing.module';


@NgModule({
  declarations: [
    EditBirthdayComponent
  ],
  imports: [
    CommonModule,
    EditBirthdayRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EditBirthdayModule { }

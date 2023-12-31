import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { CrudListComponent } from './crud-list/crud-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CrudFormComponent,
    CrudListComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CrudModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule,
  MatInputModule
} from '@angular/material';
import { MaterialRoutingModule } from './material-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  declarations: [MaterialComponent]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MaterialRoutingModule } from './material-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [MaterialComponent]
})
export class MaterialModule { }

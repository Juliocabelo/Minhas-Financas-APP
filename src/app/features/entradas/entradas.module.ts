import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradasRoutingModule } from './entradas-routing.module';
import { ListComponent } from './componets/list/list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusPipe } from './pipe/status.pipe';


@NgModule({
  declarations: [
    ListComponent,
    StatusPipe
  ],
  imports: [
    CommonModule,
    EntradasRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class EntradasModule { }

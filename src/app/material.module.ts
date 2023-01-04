import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule
  ]
})

export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesComponent } from './nurses.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NursesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path : '',
        component : NursesComponent
      }
    ])
  ]
})
export class NursesModule { }

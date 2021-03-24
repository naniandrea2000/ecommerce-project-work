import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaroselloRoutingModule } from './carosello-routing.module';
import { CaroselloComponent } from './carosello.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CaroselloRoutingModule,
    SharedModule
  ],
  exports:[
    CaroselloComponent
  ]
})
export class CaroselloModule { }

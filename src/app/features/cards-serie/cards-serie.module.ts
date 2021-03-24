import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsSerieRoutingModule } from './cards-serie-routing.module';
import { CardsSerieComponent } from './cards-serie.component';


@NgModule({
  declarations: [CardsSerieComponent],
  imports: [
    CommonModule,
    CardsSerieRoutingModule
  ]
})
export class CardsSerieModule { }

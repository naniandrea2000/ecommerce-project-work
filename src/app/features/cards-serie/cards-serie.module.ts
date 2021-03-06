import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsSerieRoutingModule } from './cards-serie-routing.module';
import { CardsSerieComponent } from './cards-serie.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CardsSerieComponent],
  imports: [
    CommonModule,
    CardsSerieRoutingModule,
    SharedModule
  ]
})
export class CardsSerieModule { }

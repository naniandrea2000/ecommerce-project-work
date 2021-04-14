import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsFilmRoutingModule } from './cards-film-routing.module';
import { CardsFilmComponent } from './cards-film.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CardsFilmComponent],
  imports: [
    CommonModule,
    CardsFilmRoutingModule,
    SharedModule
  ]
})
export class CardsFilmModule { }

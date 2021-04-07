import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsFilmRoutingModule } from './cards-film-routing.module';
import { CardsFilmComponent } from './cards-film.component';


@NgModule({
  declarations: [CardsFilmComponent],
  imports: [
    CommonModule,
    CardsFilmRoutingModule
  ]
})
export class CardsFilmModule { }

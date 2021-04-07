import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsFilmComponent } from './cards-film.component';

const routes: Routes = [{ path: '', component: CardsFilmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsFilmRoutingModule { }

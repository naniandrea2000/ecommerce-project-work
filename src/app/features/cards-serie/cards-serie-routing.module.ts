import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsSerieComponent } from './cards-serie.component';

const routes: Routes = [{ path: '', component: CardsSerieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsSerieRoutingModule { }

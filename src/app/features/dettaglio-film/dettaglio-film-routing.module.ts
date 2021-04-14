import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioFilmComponent } from './dettaglio-film.component';

const routes: Routes = [{ path: '', component: DettaglioFilmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DettaglioFilmRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DettaglioFilmRoutingModule } from './dettaglio-film-routing.module';
import { DettaglioFilmComponent } from './dettaglio-film.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { YouTubePlayer } from '@angular/youtube-player';


@NgModule({
  declarations: [DettaglioFilmComponent],
  imports: [
    CommonModule,
    DettaglioFilmRoutingModule,
    SharedModule,
    YouTubePlayer
  ]
})
export class DettaglioFilmModule { }

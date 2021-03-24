import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarModule, WavesModule, ButtonsModule} from 'angular-bootstrap-md'


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    YouTubePlayerModule,
    SharedModule,
    NavbarModule,
    WavesModule,
    ButtonsModule
  ]
})
export class HomeModule { }

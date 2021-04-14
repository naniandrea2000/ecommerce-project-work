import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) }, 
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'signup', loadChildren: () => import('./features/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'menu', loadChildren: () => import('./features/menu/menu.module').then(m => m.MenuModule) },
  { path: 'carosello', loadChildren: () => import('./features/carosello/carosello.module').then(m => m.CaroselloModule) },
  { path: 'serie', loadChildren: () => import('./features/cards-serie/cards-serie.module').then(m => m.CardsSerieModule) },
  { path: 'film', loadChildren: () => import('./features/cards-film/cards-film.module').then(m => m.CardsFilmModule) },
  { path: 'footer', loadChildren: () => import('./features/footer/footer.module').then(m => m.FooterModule) },
  { path: 'aggiungi', loadChildren: () => import('./aggiungi/aggiungi.module').then(m => m.AggiungiModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

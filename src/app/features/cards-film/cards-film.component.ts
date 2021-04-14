import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SerieFilmService } from 'src/app/services/serie-film.service';

@Component({
  selector: 'app-cards-film',
  templateUrl: './cards-film.component.html',
  styleUrls: ['./cards-film.component.scss']
})
export class CardsFilmComponent implements OnInit {

  film: any;

  constructor(private filmsService:SerieFilmService) {
  
  }

  ngOnInit(): void {
    this.getCustomersList();
    
  }

  getCustomersList() {
    this.filmsService.getFilmList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(film => {
      this.film = film;
      console.log(this.film);
    });
  }

}

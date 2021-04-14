import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SerieFilmService } from 'src/app/services/serie-film.service';

@Component({
  selector: 'app-cards-serie',
  templateUrl: './cards-serie.component.html',
  styleUrls: ['./cards-serie.component.scss']
})
export class CardsSerieComponent implements OnInit {

  serie: any;

  constructor(private seriesService:SerieFilmService) {
  
  }

  ngOnInit(): void {
    this.getFilmList();
    
  }

  getFilmList() {
    this.seriesService.getSerieList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(serie => {
      this.serie = serie;
      console.log(this.serie);
    }); 
  }
}

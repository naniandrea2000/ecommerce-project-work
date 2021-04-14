import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SerieFilmService } from 'src/app/services/serie-film.service';

@Component({
  selector: 'app-dettaglio-film',
  templateUrl: './dettaglio-film.component.html',
  styleUrls: ['./dettaglio-film.component.scss']
})
export class DettaglioFilmComponent implements OnInit {
 listaFilm: any;
 film:any;
 id:any;

 constructor(private route: ActivatedRoute,private seriesService:SerieFilmService) {
  this.route.paramMap.subscribe( params => this.id = String(params.get('id')))
  console.log(this.id);
}

  ngOnInit(): void {
    this.getFilmList();
  }

  getFilmList() {
    this.seriesService.getFilmList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(serie => {
      this.listaFilm = serie;
      this.film = this.listaFilm.find(x=>x.key == this.id)
      console.log(this.film);
    }); 
  }


}

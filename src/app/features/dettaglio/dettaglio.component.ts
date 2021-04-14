import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SerieFilmService } from 'src/app/services/serie-film.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {

 listaSerie: any;
 serie:any;
 id:any;

 constructor(private route: ActivatedRoute,private seriesService:SerieFilmService) {
  this.route.paramMap.subscribe( params => this.id = String(params.get('id')))
  console.log(this.id);
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
      this.listaSerie = serie;
      this.serie = this.listaSerie.find(x=>x.key == this.id)
      console.log(this.serie);
    }); 
  }

}

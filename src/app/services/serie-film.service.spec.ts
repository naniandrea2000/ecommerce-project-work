import { TestBed } from '@angular/core/testing';

import { SerieFilmService } from './serie-film.service';

describe('SerieFilmService', () => {
  let service: SerieFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerieFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

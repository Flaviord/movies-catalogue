import { TestBed, inject } from '@angular/core/testing';

import { ListMoviesService } from './list-movies.service';

describe('ListMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListMoviesService]
    });
  });

  it('should be created', inject([ListMoviesService], (service: ListMoviesService) => {
    expect(service).toBeTruthy();
  }));
});

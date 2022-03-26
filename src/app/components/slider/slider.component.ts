import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';
import { MoviesService } from '../../services/movies.service';
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  current = 0;
  moviesData: any;
  tv_shows: any;

  constructor(private moviesService: MoviesService, private store: Store) { }

  ngOnInit() {
    this.getNowPlayingMovies(1);
  }

  getNowPlayingMovies(page: number) {
    this.moviesService.getNowPlaying(page).pipe(delay(2000)).subscribe((res: any) => {
      this.moviesData = res.results;
      console.log("movie-data", res.results);
      this.store.dispatch(res.results);
    })
  }

}

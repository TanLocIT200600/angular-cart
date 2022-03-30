import { trigger, transition, animate, style, state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class SliderComponent implements OnInit {
  current = 0;
  movies_data: any;
  tv_shows: any;

  constructor(private moviesService: MoviesService,) { }

  ngOnInit() {
    this.getNowPlayingMovies();
    this.sliderTimer();
  }

  getNowPlayingMovies() {
    this.moviesService.getNowPlaying().pipe(delay(2000)).subscribe((res: any) => {
      this.movies_data = res.results;
      console.log("movie-data", res.results.slice(0, 3));
    })
  }
  sliderTimer() {
    setInterval(() => {
      this.current = ++this.current % this.movies_data.length;
    }, 5000);
  }

}
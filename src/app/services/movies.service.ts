import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DOMAIN, API_KEY } from "../utils/systemSetting"


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl!: string;
  apiKey!: string;
  language!: string;
  region!: string;

  constructor(private http: HttpClient) { }

  getNowPlaying(): Observable<any> {
    return this.http.get(`${DOMAIN}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
  }

  getPopular(): Observable<any> {
    return this.http.get(`${DOMAIN}movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  }
}

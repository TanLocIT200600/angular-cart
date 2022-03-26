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

  constructor(private http: HttpClient) {
    this.language = 'en-US';
    this.region = 'US';
  }

  getNowPlaying(page: number): Observable<any> {
    return this.http.get(`${DOMAIN}movie/now_playing?api_key=${API_KEY}&page=${page}&language=${this.language}&region=${this.region}`);
  }
}

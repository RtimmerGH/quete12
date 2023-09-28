import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import Apod from './models/apod.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) { }

  getImageOfTheDay(): Observable<Apod> {
    return this.http.get<Apod>('https://api.nasa.gov/planetary/apod?api_key='+environment.API_KEY); 
  }
}

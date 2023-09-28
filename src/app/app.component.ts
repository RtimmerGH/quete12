import { Component } from '@angular/core';
import { NasaService } from './nasa.service';
import Apod from './models/apod.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public imgOfTheDay?:Apod;

  constructor(public nasa: NasaService){}

  ngOnInit(){
    this.nasa.getImageOfTheDay().subscribe(img => {
      this.imgOfTheDay = img;
    })
  }

}

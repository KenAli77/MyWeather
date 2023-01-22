import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  {

  title: string = 'MyWeather';
  query: string;

  constructor(private weatherService:WeatherService){}

  onValueChange(value: string) {
    this.query = value;
  }

  fetchWeatherData(){

    if(this.query){

      this.weatherService.getWeather(this.query)

    }


  }
}

import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/WeatherData';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent {

  city:string;
  icon:string;
  weather:Weather;
  iconUrl:string;
  description:string;

  constructor(private weatherService:WeatherService){

    this.weather = weatherService.weather
    this.city = this.weather.name
    this.icon = this.weather.weather[0].icon
    this.iconUrl = "http://openweathermap.org/img/wn/"+this.icon+"@2x.png"
    this.description = this.weather.weather[0].description;

  }

 

}

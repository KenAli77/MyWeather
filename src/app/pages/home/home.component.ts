import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  {

  title: string = 'MyWeather';
  query: string;
  subscription:Subscription;


  constructor(private weatherService:WeatherService,private router:Router){



  }

  onValueChange(value: string) {
    this.query = value;
  }

  fetchWeatherData(){

    if(this.query){

      this.weatherService.getWeather(this.query).subscribe((response) => (
        this.router.navigate(["/weather-data"])
      ))

    }


  }
}

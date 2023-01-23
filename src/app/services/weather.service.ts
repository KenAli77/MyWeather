import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from '../WeatherData';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

apiKey = environment.apiKey
units = "metric"

apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

  constructor(private http:HttpClient) { }


  getWeather(query:string):Observable<Weather>{

   const url = this.apiUrl+query+"&units="+this.units+"&appid="+this.apiKey


   return this.http.get<Weather>(url);


  }
}

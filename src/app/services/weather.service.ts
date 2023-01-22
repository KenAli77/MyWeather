import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from '../WeatherData';


const htttpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

apiKey = "27902584cd441d3bccd41c4477598842"
units = "metric"

apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

  constructor(private http:HttpClient) { }


  getWeather(query:string){

   const url = this.apiUrl+query+"&units="+this.units+"&appid="+this.apiKey


   this.http.get<Weather>(url).subscribe((response)=>(
    console.log(response.main)
   ));


  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WeatherDataComponent } from './pages/weather-data/weather-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather-data', component: WeatherDataComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

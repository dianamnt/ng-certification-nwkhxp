import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentForecastPageComponent } from './components/current-forecast-page/current-forecast-page.component';
import { FiveDayForecastPageComponent } from './components/five-day-forecast-page/five-day-forecast-page.component';

const routes: Routes = [
  { path: 'forecast', component: CurrentForecastPageComponent },
  { path: 'forecast/:id', component: FiveDayForecastPageComponent },
  { path: '', redirectTo: 'forecast', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

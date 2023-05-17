import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentForecastPageComponent } from './components/current-forecast-page/current-forecast-page.component';

const routes: Routes = [
  { path: 'forecast', component: CurrentForecastPageComponent },
  { path: '', redirectTo: 'forecast', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

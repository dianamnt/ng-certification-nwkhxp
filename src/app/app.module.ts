import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ForecastCardComponent } from './components/forecast-card/forecast-card.component';
import { CurrentForecastPageComponent } from './components/current-forecast-page/current-forecast-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    ForecastCardComponent,
    CurrentForecastPageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

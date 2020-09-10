import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WeatherService } from './shared/services/weather.service';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule
    ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

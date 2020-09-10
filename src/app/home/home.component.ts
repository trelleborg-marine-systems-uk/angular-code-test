import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { City } from '../shared/models/city.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private weatherService: WeatherService) { }

    ngOnInit(): void {
        this.weatherService.getCityWeather('London').subscribe((data: City) => {
            console.log(data);
        });
    }

}

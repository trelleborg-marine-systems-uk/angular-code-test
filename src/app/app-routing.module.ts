import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherListComponent } from './weather-list/weather-list.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'list-weather', component: WeatherListComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }

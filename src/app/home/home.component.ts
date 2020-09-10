import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public pageContent = 'Replace this text with something that loads dynamically';

    constructor() { }

    ngOnInit(): void {

    }

    public swapContent(): void {
        console.log('Clicked me!');
    }
}

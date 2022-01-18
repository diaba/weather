import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  zip: string = '';
  weather: any;
  unit:string = '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
findWeather(zip: string, unit:string): void {
  this.http
      .get(
        `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=${unit}`
      )
      .subscribe((response) => {
        console.log(response);
        this.weather = response;
      });
}
}

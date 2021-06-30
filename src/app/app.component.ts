import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { Events } from './events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  events : Events[] = [];

  constructor(private service: AppServiceService) {}
  
  ngOnInit(){
    this.getDataFromAPI();
  }

  getDataFromAPI(){
    this.service.getData().subscribe((response) => {
      this.events = response;
      
      console.log('response from api is', response)
      
    }, (error) => {
      console.log('error is', error);
    })
  }
}

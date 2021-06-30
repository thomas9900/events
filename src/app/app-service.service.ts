import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from './events';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }


  getData(){
    return this.http.get<Events[]>('/api/getData');
  }
}

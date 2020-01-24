import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http:HttpClient) { }

  getSwapi(){
    return this.http.get<any>('https://swapi.co/api/people');
  }

  getFilms(id){
    return this.http.get("https://swapi.co/api/films/"+id+"/").pipe(map(film=>film));
  }
  getVehicles(id){
    return this.http.get("https://swapi.co/api/vehicles/"+id+"/").pipe(map(vehicle =>vehicle));
  }
}

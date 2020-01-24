import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-component',
  templateUrl: './film-component.component.html',
  styleUrls: ['./film-component.component.css']
})
export class FilmComponent implements OnInit {
  film;
  constructor(private filmService:SwapiService,private route:ActivatedRoute ) { }

  ngOnInit() {
    this.getfilm();

  }

  getfilm(){
   let id= this.route.snapshot.paramMap.get('id');
     this.filmService.getFilms(id)
    .subscribe(filmData => {
        this.film =filmData;
        console.log(filmData)
     })}
  
}

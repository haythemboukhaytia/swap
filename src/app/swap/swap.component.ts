import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css']

})
export class SwapComponent implements OnInit {
  allswap:any=[];
  film;
  vehicle;

  constructor(private swapi:SwapiService, private router:Router) { }

  ngOnInit() {
    this.getallswapi();
    
  }
  getallswapi(){
    this.swapi.getSwapi().subscribe( data => {
      this.allswap = data
      console.log(data);
    }
    )
    
  }

  onClickFilm(film){
    let url = film.substring(21)
    this.router.navigateByUrl(url);
    console.log(url);

}
onclickVehicle(vehicle){
  let url = vehicle.substring(21)
  console.log(url)
  this.router.navigateByUrl(url);
}
}

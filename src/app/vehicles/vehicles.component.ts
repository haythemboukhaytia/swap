import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicle;

  constructor(private swapiservice:SwapiService, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.getVehicle();
  }
 getVehicle(){
  let id = this.route.snapshot.paramMap.get('id')
  this.swapiservice.getVehicles(id).subscribe(data => {this.vehicle = data})
  console.log(this.vehicle);
  console.log(id);
}
}

import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from "@angular/router";
import {RentalService} from "../shared/rental-list.service";
import {Rental } from '../shared/rental-link.model';
@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {


    rental: Rental;
  constructor(private route: ActivatedRoute,
              private rentalServive: RentalService) { }
 
  ngOnInit() {
    this.rental= new Rental();
    this.route.params.subscribe(
      (params)=>{
          
          this.getRental(params['rentalId']);
      }
    )
  }
  getRental(rentalId: string){
    this.rentalServive.getRentalById(rentalId).subscribe(
      (rental: Rental)=>{
        this.rental=rental;
      }
    );
  }

}

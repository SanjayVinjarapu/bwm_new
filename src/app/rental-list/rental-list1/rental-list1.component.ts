import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental-list.service';
import {Rental} from '../shared/rental-link.model';
@Component({
  selector: 'bwm-rental-list1',
  templateUrl: './rental-list1.component.html',
  styleUrls: ['./rental-list1.component.scss']
})
export class RentalList1Component implements OnInit {
  rentals : Rental[]=[];
  constructor( private rentalService: RentalService) { }

  ngOnInit() {
    const rentalObservable=this.rentalService.getRentals();
    rentalObservable.subscribe(
      (rentals : Rental[])=>{
        this.rentals=rentals
      },
      (err)=>{},
      ()=>{}
    );
  }

}

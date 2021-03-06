import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Rental } from './rental-link.model';
Injectable()

@Injectable()

export class RentalService{
    private rentals:Rental[]=  [  
    {
          id :'1',
          title:"Central Apartment",
          city:"Hyderabad",
          street:"kavadiguda",
          category:"apartment",
          image:"http://via.placeholder.com/350x250",
          bedrooms:2,
          description:"good",
          dailyRate:25,
          shared:false,
          createdAt:"08/08/2020"
        },
        {
          id :'2',
          title:"Central Apartment",
          city:"Hyderabad",
          street:"kavadiguda",
          category:"apartment",
          image:"http://via.placeholder.com/350x250",
          bedrooms:2,
          description:"good",
          dailyRate:25,
          shared:false,
          createdAt:"08/08/2020"
        },
        {
          id :'3',
          title:"Central Apartment",
          city:"Hyderabad",
          street:"kavadiguda",
          category:"apartment",
          image:"http://via.placeholder.com/350x250",
          bedrooms:2,
          description:"good",
          dailyRate:25,
          shared:false,
          createdAt:"08/08/2020"
        },
        {
          id :'4',
          title:"Central Apartment",
          city:"Hyderabad",
          street:"kavadiguda",
          category:"apartment",
          image:"http://via.placeholder.com/350x250",
          bedrooms:2,
          description:"good",
          dailyRate:25,
          shared:false,
          createdAt:"08/08/2020"
        }
        
      ];
      public getRentalById(rentalId: string): Observable<Rental>{
        return new Observable<Rental>((observer)=>{
        setTimeout(()=>{
          const foundRental=this.rentals.find((rental)=>
          {return rental.id==rentalId;});
          observer.next(foundRental);
        },500);
       });

        }
      
      public getRentals():Observable<Rental[]>{
          return new Observable<Rental[]>((observer)=>{
              setTimeout(
                  ()=>{
                      observer.next(this.rentals);
                  },1000);
              
          });
     
         
      }
}
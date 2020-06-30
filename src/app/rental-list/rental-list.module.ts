import { NgModule } from '@angular/core';
import { RentalListItemsComponent} from "./rental-list-items/rental-list-items.component";
import { RentalList1Component } from "./rental-list1/rental-list1.component";
import { RentalListComponent } from './rental-list.component';
import {CommonModule} from '@angular/common';
import { RentalService } from './shared/rental-list.service';
import {Routes,RouterModule} from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component'

const routes: Routes=[
    {path:'rentals',component:RentalListComponent,
    children:[
        {path:'',component:RentalList1Component},
        {path:':rentalId', component:RentalDetailComponent}
    ]  
        }


  ]

@NgModule({
    declarations:[
        RentalListItemsComponent,
        RentalList1Component,
        RentalListComponent

    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers:[RentalService]
})

export class RentalModule{

}
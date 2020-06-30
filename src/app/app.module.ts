import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RentalListComponent } from './rental-list/rental-list.component';

import { RentalModule} from './rental-list/rental-list.module';
import { RentalDetailComponent} from "./rental-list/rental-detail/rental-detail.component";
const routes: Routes=[
  {path:'', redirectTo:"/rentals", pathMatch:'full'},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    RentalDetailComponent
  
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RentalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

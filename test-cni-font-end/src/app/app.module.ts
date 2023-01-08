import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddVehicleComponent } from './components/pages/add-vehicle/add-vehicle.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ItemDetailComponent } from './components/pages/item-detail/item-detail.component';
import { FormAddVehicleComponent } from './components/form-add-vehicle/form-add-vehicle.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditVehicleComponent } from './components/pages/edit-vehicle/edit-vehicle.component';
import { ListVehicleComponent } from './components/pages/list-vehicle/list-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddVehicleComponent,
    HomeComponent,
    ItemDetailComponent,
    FormAddVehicleComponent,
    MessagesComponent,
    EditVehicleComponent,
    ListVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

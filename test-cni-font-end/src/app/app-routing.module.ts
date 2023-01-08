import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './components/pages/add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './components/pages/edit-vehicle/edit-vehicle.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ItemDetailComponent } from './components/pages/item-detail/item-detail.component';
import { ListVehicleComponent } from './components/pages/list-vehicle/list-vehicle.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add', component: AddVehicleComponent},
  {path: 'list', component: ListVehicleComponent},
  {path: 'list/edit/:_id', component: EditVehicleComponent},
  {path: 'list/:_id', component: ItemDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

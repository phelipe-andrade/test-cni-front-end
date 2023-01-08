import { Component } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { IVehicleDB } from 'src/interfaces/Vehicle';

import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent {
  vehicles: IVehicleDB[] = [];
  allVehicles: IVehicleDB[] = [];
  apiUrl = 'http://localhost:3001'

  faSearch = faSearch;
  searchTerm: string = '';

  constructor(private vehicleService: VehicleService){ }

    ngOnInit(): void {
      this.vehicleService.getAllVehicle().subscribe((data) => {
        this.allVehicles = data;
        this.vehicles = data;
      });
    }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.vehicles = this.allVehicles.filter(vehicle => {
      return vehicle.model.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    })
  }
}

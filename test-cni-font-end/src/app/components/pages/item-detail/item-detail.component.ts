import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { VehicleService } from 'src/app/services/vehicle.service';
import { IVehicle, IVehicleDB } from 'src/interfaces/Vehicle';

import {faEdit ,faRemove} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  apiUrl = 'http://localhost:3001';
  vehicle?: IVehicleDB;
  faEdit = faEdit;
  faRemove = faRemove;

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router,
    private messagesService: MessagesService
    ){
    this.getVehicle();
  }

  getVehicle() {
    const id = this.route.snapshot.paramMap.get("_id");
    if (id) this.vehicleService.getOneVehicle(id).subscribe((vehicle) => (this.vehicle = vehicle));
  }

  async removeVehicle(vehicle: IVehicleDB) {
    const result = confirm(`Deseja deletar o veículo: ${vehicle.model}`);
    if (!result) return;
    if (vehicle._id){
      await this.vehicleService.removeVehicle(vehicle._id).subscribe();
      await this.vehicleService.removeImg(vehicle.img).subscribe();
      this.messagesService.add(`${vehicle.model} apagado com sucesso!`);
      this.router.navigate(['./list']);
    }

  }

}

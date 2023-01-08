import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { VehicleService } from 'src/app/services/vehicle.service';
import { IVehicleDB } from 'src/interfaces/Vehicle';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent {
  apiUrl = 'http://localhost:3001';
  vehicle!: IVehicleDB;
  btnText: string = 'Atualizar';
  newImage: boolean = false;
  setImage: string = '';
  // error: boolean = false;
  // message: string = ''

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router,
    private messagesService: MessagesService
    ) {
      this.getVehicle();
    }

  getVehicle() {
    const id = this.route.snapshot.paramMap.get("_id");
    if (id) this.vehicleService.getOneVehicle(id).subscribe((vehicle) => {this.vehicle = vehicle});
  }

  onChangeImage(image: string){
    this.newImage = true;
    this.setImage = image;
  }

  async editVehicle(vehicleEdit: IVehicleDB){


    if (vehicleEdit.img) {
      await this.vehicleService.editImg(vehicleEdit, this.vehicle.img).subscribe( async (image) => {
        await this.vehicleService.editVehicle(vehicleEdit, image.img).subscribe();
      })
    } else {
      await this.vehicleService.editVehicle(vehicleEdit, this.vehicle.img).subscribe();
    }

    this.messagesService.add("Veículo atualizado com sucesso!");
    this.router.navigate(['/list']);
  }

}

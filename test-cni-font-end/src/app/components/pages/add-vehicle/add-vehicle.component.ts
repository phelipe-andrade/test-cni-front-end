import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';
import { IVehicle, IVehicleBase} from 'src/interfaces/Vehicle';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {
  previewImage: string = '';
  error: boolean = false;
  message: string = ''

  constructor(
    private vehicleService: VehicleService,
    private messagesService: MessagesService,
    private router: Router
    ) {}


  async addVehicle(vehicle: IVehicleBase) {
    await this.vehicleService.addImg(vehicle).subscribe( async (image) => {
      const img = image.img;

      await this.vehicleService.addVehicle(vehicle, img).subscribe(data  => {
        if (data.message) this.message = data.message
        if (data.error) {
          this.error = true;
          this.message = data.error;
        }
      });
    })

    this.messagesService.add(this.message ? this.message : "Veículo adicionado com sucesso!");
    if(this.error) return;
    this.router.navigate(['/list']);
  }

  onChangeImage(image: string) {
    this.previewImage = image;
  }
}

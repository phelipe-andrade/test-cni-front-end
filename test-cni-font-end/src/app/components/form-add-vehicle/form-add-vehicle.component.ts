import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormGroup ,FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IVehicle, IVehicleDB } from 'src/interfaces/Vehicle';

@Component({
  selector: 'app-form-add-vehicle',
  templateUrl: './form-add-vehicle.component.html',
  styleUrls: ['./form-add-vehicle.component.css']
})
export class FormAddVehicleComponent {
  @Output() changeImage: EventEmitter<any> = new EventEmitter();
  @Output() onSubmit: EventEmitter<IVehicle> = new EventEmitter();
  @Input() vehicleData: IVehicleDB | null = null;
  @Input() btnText: string = '';

  vehicleForm!: FormGroup;
  haveImage = false;
  isEdit: boolean = false;

  constructor(private route: ActivatedRoute,) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("_id");
    if (id) this.isEdit = true;

    this.vehicleForm = new FormGroup({
      model: new FormControl(this.vehicleData ? this.vehicleData.model : '', [Validators.required]),
      brand: new FormControl(this.vehicleData ? this.vehicleData.brand : '', [Validators.required]),
      age: new FormControl(this.vehicleData ? this.vehicleData.age : '', [Validators.required]),
      value: new FormControl(this.vehicleData ? this.vehicleData.value : '', [Validators.required]),
      description: new FormControl(this.vehicleData ? this.vehicleData.description : '', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      _id: new FormControl('', [Validators.required]),
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    this.haveImage = true;
    this.vehicleForm.patchValue({ img: file});

    const render = new FileReader();
    render.onload = () => {
      const image = render.result as string;
      this.changeImage.emit(image);
    }

    render.readAsDataURL(file)
  }

  get model() {
    return this.vehicleForm.get('model')!;
  }

  get brand() {
    return this.vehicleForm.get('brand')!;
  }
  get age() {
    return this.vehicleForm.get('age')!;
  }

  get value() {
    return this.vehicleForm.get('value')!;
  }
  get description() {
    return this.vehicleForm.get('description')!;
  }

  addVehicle(){
    if (this.isEdit) {
      this.haveImage = true;
      this.vehicleForm.patchValue({ _id: this.vehicleData?._id});
    }

    if (this.vehicleForm.invalid && !this.haveImage) return;
    this.onSubmit.emit(this.vehicleForm.value);
  }
}

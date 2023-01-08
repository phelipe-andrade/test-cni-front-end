import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVehicle, IVehicleBase, IVehicleDB } from 'src/interfaces/Vehicle';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponseApi } from 'src/interfaces/ResponseApi';
import { IImage } from 'src/interfaces/Image';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'http://localhost:3001/api/vehicle';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient ) { }

  // ACTIONS VEHICLE
  getAllVehicle(): Observable<IVehicleDB[]> {
    return this.http.get<IVehicleDB[]>(this.apiUrl);
  }

  getOneVehicle(_id: string): Observable<IVehicleDB> {
    return this.http.get<IVehicleDB | any>(`${this.apiUrl}/${_id}`);
  }

  removeVehicle(_id: string){
    return this.http.delete(`${this.apiUrl}/${_id}`,  this.httpOptions);
  }

  addVehicle(vehicle: IVehicleBase, img: string): Observable<IResponseApi>{
    const body: IVehicleDB = {
      img: img,
      brand: vehicle.brand,
      model: vehicle.model,
      description: vehicle.description,
      age: vehicle.age,
      value: vehicle.value
    }

    return this.http.post<IResponseApi>(`${this.apiUrl}/post`, JSON.stringify(body), this.httpOptions);
  }

  editVehicle(vehicle: IVehicleDB, newImage: string): Observable<IResponseApi>{
    console.log(vehicle._id);

    const body: IVehicleDB = {
      img: newImage,
      brand: vehicle.brand,
      model: vehicle.model,
      description: vehicle.description,
      age: vehicle.age,
      value: vehicle.value
    }
    return this.http.patch<IResponseApi>(`${this.apiUrl}/${vehicle._id}`, JSON.stringify(body), this.httpOptions);
  }

  // ACTIONS IMAGE
  removeImg(img: string) {
    return this.http.delete<IResponseApi>(`${this.apiUrl}/photo/${img}`)
  }

  editImg(vehicle: IVehicleDB, id_img: string): Observable<IImage> {
    const formData = new FormData();
    formData.append("photo", vehicle.img);
    return this.http.put<IImage>(`${this.apiUrl}/photo/${id_img}`, formData);
  }

  addImg(vehicle: IVehicleBase): Observable<IImage> {
    const formData = new FormData();
    formData.append("photo", vehicle.img);
    return this.http.post<IImage>(`${this.apiUrl}/photo`, formData);
  }
}

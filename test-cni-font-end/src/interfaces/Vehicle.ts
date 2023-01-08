export interface IVehicleBase {
  brand: string;
  model: string;
  description: string;
  age: string;
  value: string;
  img: string;
}

export interface IVehicle extends IVehicleBase {
  _id?: string;
  url_img: string;
}


export interface IVehicleDB extends IVehicleBase {
  _id?: string;
}

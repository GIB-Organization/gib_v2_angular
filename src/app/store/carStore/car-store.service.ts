import { Injectable, inject } from '@angular/core';
import { CarStore } from './car-store.store';
import { CarApiService } from '../../services/api/carApi/car-api.service';
import { take } from 'rxjs';
import { ICar } from '../../models/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarStoreService {
  private api = inject(CarApiService);
  private store = inject(CarStore);

  getAllCars(){
    this.store.setLoading(true)
    return this.api.getAllCars().pipe(take(1)).subscribe({
        next:(res)=>{
            this.store.update({
              cars:res.result
            })
        },
        complete:()=>{this.store.setLoading(false)},
        error:(err)=>{
          this.store.setLoading(false)
        }
    })
  }
  deleteCar(id:string, index:number){
    const CARS = [...this.store.getValue().cars];
    CARS.splice(index, 1);
    this.store.update({isDeleting: true})
    this.store.update({
      isDeleting: false,
      cars: CARS
    })
    return this.api.deleteCar(id).pipe(take(1)).subscribe({
        next:(res)=>{
          const CARS = [...this.store.getValue().cars];
          CARS.splice(index, 1);
          this.store.update({isDeleting: true})
          this.store.update({
            isDeleting: false,
            cars: CARS
          })
        },
        complete:()=>{this.store.update({isDeleting: false})},
        error:(err)=>{this.store.update({isDeleting: false})}
    })
  }
  
}

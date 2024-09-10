import { DestroyRef, Injectable, inject } from '@angular/core';
import { CarStore } from './car-store.store';
import { CarApiService } from '../../services/api/carApi/car-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IErrorResponse } from '../../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class CarStoreService {
  private api = inject(CarApiService);
  private store = inject(CarStore);

  getAllCars(ref:DestroyRef){
    this.store.setLoading(true)
    return this.api.getAllCars().pipe(takeUntilDestroyed(ref)).subscribe({
        next:(res)=>{
            this.store.update({
              cars:res.result
            })
        },
        complete:()=>{this.store.setLoading(false)},
        error:(err:IErrorResponse)=>{
          this.store.setLoading(false)
        }
    })
  }
  deleteCar(id:string, index:number, ref:DestroyRef){
    return this.api.deleteCar(id).pipe(takeUntilDestroyed(ref)).subscribe({
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
        error:(err:IErrorResponse)=>{
          this.store.update({isDeleting: false})
        }
    })
  }
}

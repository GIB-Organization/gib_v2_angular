import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { ICarStore } from './car-store.interface';

const initValue = () : ICarStore =>{
  return {
    cars:[
      {
        sequenceNumber: 'adsasdadsa',
        logoUrl: 'qweqeqweqq',
        plateNumber: 252,
        plateChars: 'asasdad',
        model: 'sdas',
        brand: 'sdsd',
        year: '2312',
        id: '2313212312312'
      },
      {
        sequenceNumber: 'adsasdadsa',
        logoUrl: 'qweqeqweqq',
        plateNumber: 2526,
        plateChars: 'asasdad',
        model: 'sdas',
        brand: 'sdsd',
        year: '2312',
        id: '2313212312312'
      },
    ]
  }
}
@Injectable({
  providedIn: 'root'
})
@StoreConfig({name:'CarStore', resettable: true})
export class CarStore extends Store<ICarStore> {

  constructor() { super(initValue()) }
}

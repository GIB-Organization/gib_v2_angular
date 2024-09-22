import { Injectable } from '@angular/core';
import { IPoliciesStore } from './policies-store.interface';
import { Store, StoreConfig } from '@datorama/akita';
import { EPolicyNajmStatus, EPolicyStatus } from '../../core/enums';

const initialState = () : IPoliciesStore =>{
  return {
    policies:[
      {
        policyId: '',
        companyName: '',
        policyStatus:EPolicyStatus.active,
        policyStartDate: '',
        policyEndDate: '',
        najmStatus: EPolicyNajmStatus.pending,
        carPlateChars: '',
        carPlateNumber: 0,
        carModel: '',
        carBrand: '',
        carYear: '',
        policyLeftDays: '50',
        policyFileUrl: '',
        idNumber: '',
        sequenceNumber: ''
      },
      {
        policyId: '',
        companyName: '',
        policyStatus:EPolicyStatus.active,
        policyStartDate: '',
        policyEndDate: '',
        najmStatus: EPolicyNajmStatus.success,
        carPlateChars: '',
        carPlateNumber: 0,
        carModel: '',
        carBrand: '',
        carYear: '',
        policyLeftDays: '40',
        policyFileUrl: '',
        idNumber: '',
        sequenceNumber: ''
      },
      {
        policyId: '',
        companyName: '',
        policyStatus:EPolicyStatus.expired,
        policyStartDate: '',
        policyEndDate: '',
        najmStatus: EPolicyNajmStatus.success,
        carPlateChars: '',
        carPlateNumber: 0,
        carModel: '',
        carBrand: '',
        carYear: '',
        policyLeftDays: '25',
        policyFileUrl: '',
        idNumber: '',
        sequenceNumber: ''
      },
    ],
    fileIsLoading: false,
  } 
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'PoliciesStore', resettable: true })
export class PoliciesStore extends Store<IPoliciesStore> {

  constructor() { super(initialState()) }
}

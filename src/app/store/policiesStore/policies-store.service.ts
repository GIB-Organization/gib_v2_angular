import { Injectable, inject } from '@angular/core';
import { PoliciesStore } from './policies-store.store';
import { PoliciesApiService } from '../../services/api/policiesApi/policies-api.service';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliciesStoreService {
  private api = inject(PoliciesApiService);
  private store = inject(PoliciesStore);

  getAllPolicies(){
    this.store.setLoading(true)
    return this.api.getAllPolicies().pipe(take(1)).subscribe({
        next:(res)=>{
            this.store.update({
              policies:res
            })
        },
        complete:()=>{this.store.setLoading(false)},
        error:(err)=>{
          this.store.setLoading(false)
        }
    })
  }


  resetStore(){
    this.store.update({
      policies:[]
    })
  }
}

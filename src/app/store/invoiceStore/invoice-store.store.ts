import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { IInvoiceStore } from './invoice-store.interface';

const initValue = () : IInvoiceStore =>{
  return {
    invoices:[
      {
        id: 'sdfsdfs432342',
        totalPrice: '1200',
        detailsAr: 'شراء تأمين من شركه الخليج',
        detailsEn: 'Buying Insurance from gulf company',
        invoiceDate: 'Mon, 07 Oct 2024 12:07:39 GMT',
        invoiceUrl: '1',
        email: 'engwasem20@gmail.com'
      }
    ]
  }
}
@Injectable({
  providedIn: 'root'
})
@StoreConfig({name:'InvoiceStore', resettable: true})
export class InvoiceStore extends Store<IInvoiceStore> {

  constructor() { super(initValue()) }
}

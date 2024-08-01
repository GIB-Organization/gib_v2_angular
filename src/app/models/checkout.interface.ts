import { FormControl } from "@angular/forms";

export interface ICreateCheckoutDTO{
    referenceId: string;
    companyId: number;
    productId: string;
    totalAmount: number;
    selectedBenfitCodes: number[];
    bankName: string;
    iban: string;
    email: string;
    phone: string;
}

export interface ICreateCheckoutResponse{
    checkoutId:string
}

export interface ICheckoutDataFormGroup{
    bankName: FormControl<string>;
    iban: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
    termsConditions: FormControl<boolean>;
}
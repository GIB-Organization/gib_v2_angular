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
    phoneNumber: string;
    paymentMethodId: number;
}

export interface ICreateCheckoutResponse{
    checkoutId:string
}

export interface ICheckoutDataFormGroup{
    bankName: FormControl<string>;
    iban: FormControl<string>;
    email: FormControl<string>;
    phoneNumber: FormControl<string>;
    termsConditions: FormControl<boolean>;
}
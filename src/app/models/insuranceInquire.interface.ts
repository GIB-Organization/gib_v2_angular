import { FormControl } from "@angular/forms";
import { EInsurancePurpose, EVehicleRegisterType } from "../core/enums/insurance-inquire";

export interface IInsuranceInquireDTO {
  purpose: EInsurancePurpose;
  vehicleRegisterType: number;
  idNumber: number;
  serialNumber: number;
  startDate: string | null;
  vehicleYear: number;
  sellerId: number;
  customsNumber: number,
  birthYear:number,
  bithMonth:number
}

export interface IInsuranceInquireFormBuilder extends ITermsConditionsAgree {
  purpose: FormControl<EInsurancePurpose>;
  vehicleRegisterType: FormControl<EVehicleRegisterType>;
  idNumber: FormControl<number | null>;
  serialNumber: FormControl<number | null>;
  startDate: FormControl<string | null>;
  vehicleYear: FormControl<number | null>;
  sellerId: FormControl<number | null>;
  customsNumber: FormControl<number | null>;
  birthYear: FormControl<number | null>;
  birthMonth: FormControl<number | null>;
}

export interface ITermsConditionsAgree{
  agreedTermsConditions: FormControl<boolean>
}

export interface IInsuranceInquireResponse {
  refId?:string,
  firstName?: string;
  fatherName?: string;
  familyName?: string;
  grandFatherName?: string;
  firstNameT?: string;
  fatherNameT?: string;
  familyNameT?: string;
  grandFatherNameT?: string;
  maker?: string;
  model?: string;
  modelYear?: number;
  majorColor?: string;
  weight?: number;
  cylinder?: number;
  capacity?: number;
  vehicleIDNumber?: null;
  registrationLocationCode?: null;
  regTypeCode?: null;
  registrationExpiryDate?: null;
  plateNumber?: null;
  plateText1?: null;
  plateText2?: null;
  plateText3?: null;
  vehicleInfo?: any[];
}
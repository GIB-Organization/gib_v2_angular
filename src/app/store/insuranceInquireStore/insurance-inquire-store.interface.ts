import { WritableSignal } from "@angular/core";
import { IInsuranceInquireResponse } from "../../models/insuranceInquire.interface";

export interface IInsuranceInquireStore{
    inquireResponse?: IInsuranceInquireResponse,
}
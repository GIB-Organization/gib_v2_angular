import { EPaymentsTypes } from "../../core/enums";

export interface IPaymentStore{
    checkoutId?: string,
    checkoutStatus?:string,
    paymentMethod?:EPaymentsTypes
}
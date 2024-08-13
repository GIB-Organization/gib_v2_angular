import { ValidatorFn, Validators } from "@angular/forms";

export const VALIDATORS: { [key: string]: ValidatorFn } = {
    email: Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
    phone: Validators.pattern(/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/),
    password: Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d])[\w\W]{8,16}$/), 
}
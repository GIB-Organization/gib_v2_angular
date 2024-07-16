import { ValidatorFn, Validators } from "@angular/forms";

export const VALIDATORS: { [key: string]: ValidatorFn } = {
    email: Validators.pattern(/^-?\d+$/),
    phone: Validators.pattern(/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/),
    password: Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/), 
}
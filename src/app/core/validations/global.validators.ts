import { ValidatorFn, Validators } from "@angular/forms";

export const VALIDATORS: { [key: string]: ValidatorFn } = {
    email: Validators.pattern(/^-?\d+$/)
}
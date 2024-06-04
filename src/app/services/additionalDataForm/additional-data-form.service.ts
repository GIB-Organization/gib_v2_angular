import { Injectable, inject, DestroyRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IAdditionalData, IAdditionalDataFormGroup, IAdditionalDetailsFormGroup, IDriverDetailsFormGroup } from '../../models/additionalData.interface';
import { EPromoTypeEnum } from '../../core/enums';
import { INSURNACE_INQUIRE_VALIDATORS } from '../../core/validations';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class AdditionalDataFormService {
  #updatingForm: boolean = false
  fb = inject(FormBuilder);
  defaultFormValue: Partial<IAdditionalData> = {
    additionalDetails:{
      otherViolations:false,
      sameWorkCity:false,
      anotherCountryLicense:false,
      carModified:false,
      childrenUnder16:0,
      accidents5Years:0,
      yearsHoldingLicense: 0,
      modifications: null,
    },
    driverDetails:{
      sameAddress: true,
      anotherCountryLicense: false,
      childrenUnder16: 0,
      yearsHoldingLicense: 0,
      accidents5Years: 0,
      otherViolations: false,
    },
  }
  form = this.fb.group<IAdditionalDataFormGroup>({
    isAdditionalData: new FormControl(false),
    isDriverSection: new FormControl(false),
    estimatedValue: new FormControl(null, [Validators.required]),
    usePurpose: new FormControl(null),
    getDiscount: new FormControl(null),
    promoType: new FormControl(EPromoTypeEnum.email),
    workMail: new FormControl(null),
    partyType: new FormControl(null),
    partyId: new FormControl(null),
    promoCode: new FormControl(null),
    driverDetails: this.fb.group<IDriverDetailsFormGroup>({
      idNumber: new FormControl(null),
      birthYear: new FormControl(null),
      birthMonth: new FormControl(null),
      educationLevel: new FormControl(null),
      childrenUnder16: new FormControl(0),
      drivingPercent: new FormControl(null),
      driverLicenseRestrict: new FormControl(null),
      accidents5Years: new FormControl(0),
      relativeRelation: new FormControl(null),
      otherViolations: new FormControl(false),
      violationsTypes: new FormControl(null),
      sameAddress: new FormControl(true),
      residenceCityId: new FormControl(null),
      workCityId: new FormControl(null),
      anotherCountryLicense: new FormControl(false),
      licenseCountryId: new FormControl(null),
      yearsHoldingLicense: new FormControl(0),
    }),
    additionalDetails: this.fb.group<IAdditionalDetailsFormGroup>({
      educationLevel: new FormControl(null),
      childrenUnder16: new FormControl(0),
      ownerBirthDate: new FormControl(null),
      drivingRestriction: new FormControl(null),
      parkingPlace: new FormControl(null),
      accidents5Years: new FormControl(0),
      annualDistance: new FormControl(null),
      motionVector: new FormControl(null),
      otherViolations: new FormControl(false),
      violationTypes: new FormControl(null),
      sameWorkCity: new FormControl(false),
      workCityId: new FormControl(null),
      anotherCountryLicense: new FormControl(false),
      licenseCountryId: new FormControl(null),
      yearsHoldingLicense: new FormControl(null),
      carModified: new FormControl(false),
      modifications: new FormControl(''),
    })
  })

  watchForm(ref: DestroyRef) {
    this.form.valueChanges.pipe(takeUntilDestroyed(ref)).subscribe({
      next: (value) => {
        if (!this.#updatingForm) {
          this.#updatingForm = true
          this.getIdNumberValidation(value)
          this.getBirthDateValidation(value)
          this.getViolationsValidation(value)
          this.getWorkAddressValidation(value)
          this.getCountryLicenseValidation(value)
          this.getOwnerViolationsValidation(value)
          this.getOwnerWorkAddressValidation(value)
          this.getOwnerCountryLicenseValidation(value)
          this.getCarModificationValidation(value)
          this.#updatingForm = false
        }
      }
    })
  }

  getIdNumberValidation(value: IAdditionalData) {
    const ID_NUMBER = this.form.controls.driverDetails.controls.idNumber;
    value.isDriverSection ? ID_NUMBER.setValidators(INSURNACE_INQUIRE_VALIDATORS['idNumber']) : ID_NUMBER.clearValidators();
  }

  getBirthDateValidation(value: IAdditionalData) {
    const BIRTH_YEAR = this.form.controls.driverDetails.controls.birthYear;
    const BIRTH_MONTH = this.form.controls.driverDetails.controls.birthMonth;
    if (value.isDriverSection) {
      BIRTH_YEAR.setValidators(INSURNACE_INQUIRE_VALIDATORS['required']);
      BIRTH_MONTH.setValidators(INSURNACE_INQUIRE_VALIDATORS['required']);
    }
    else {
      BIRTH_YEAR.clearValidators();
      BIRTH_MONTH.clearValidators();
      BIRTH_YEAR.updateValueAndValidity();
      BIRTH_MONTH.updateValueAndValidity();
    }
  }

  getViolationsValidation(value: IAdditionalData) {
    const VIOLATIONS = this.form.controls.driverDetails.controls.violationsTypes;
    if (value.isDriverSection && value.driverDetails?.otherViolations) { VIOLATIONS.setValidators(INSURNACE_INQUIRE_VALIDATORS['required']) }
    else { VIOLATIONS.clearValidators() }
    VIOLATIONS.updateValueAndValidity()
  }

  getWorkAddressValidation(value: IAdditionalData) {
    const WORK_CITY = this.form.controls.driverDetails.controls.workCityId;
    const RESIDENT_CITY = this.form.controls.driverDetails.controls.residenceCityId;
    if (!value.driverDetails?.sameAddress && value.isDriverSection) {
      WORK_CITY.setValidators(INSURNACE_INQUIRE_VALIDATORS['required']);
      RESIDENT_CITY.setValidators(INSURNACE_INQUIRE_VALIDATORS['required']);
    } else {
      WORK_CITY.clearValidators();
      RESIDENT_CITY.clearValidators();
      WORK_CITY.updateValueAndValidity();
      RESIDENT_CITY.updateValueAndValidity();
    }
  }

  getCountryLicenseValidation(value: IAdditionalData) {
    const COUNTRY = this.form.controls.driverDetails.controls.licenseCountryId;
    if (value.driverDetails?.anotherCountryLicense && value.isDriverSection) {
      COUNTRY.setValidators(INSURNACE_INQUIRE_VALIDATORS['required']);
    } else {
      COUNTRY.clearValidators();
      COUNTRY.updateValueAndValidity();
    }
  }

  getOwnerViolationsValidation(value: IAdditionalData) {
    const VIOLATIONS = this.form.controls.additionalDetails.controls.violationTypes;
    if (value.isAdditionalData && value.additionalDetails?.otherViolations) { VIOLATIONS.setValidators(INSURNACE_INQUIRE_VALIDATORS['required']) }
    else { VIOLATIONS.clearValidators() }
    VIOLATIONS.updateValueAndValidity()
  }


  getOwnerWorkAddressValidation(value: IAdditionalData) {
    const WORK_CITY = this.form.controls.additionalDetails.controls.workCityId;
    if (value.additionalDetails?.sameWorkCity && value.isAdditionalData) {
      WORK_CITY.setValidators(INSURNACE_INQUIRE_VALIDATORS['required']);
    } else {
      WORK_CITY.clearValidators();
      WORK_CITY.updateValueAndValidity();
    }
  }


  getOwnerCountryLicenseValidation(value: IAdditionalData) {
    const COUNTRY = this.form.controls.additionalDetails.controls.licenseCountryId;
    if (value.additionalDetails?.anotherCountryLicense && value.isAdditionalData) {
      COUNTRY.setValidators(INSURNACE_INQUIRE_VALIDATORS['required']);
    } else {
      COUNTRY.clearValidators();
      COUNTRY.updateValueAndValidity();
    }
  }


  getCarModificationValidation(value: IAdditionalData) {
    const MODIFICATIONS = this.form.controls.additionalDetails.controls.modifications;
    if (value.additionalDetails?.carModified && value.isAdditionalData) {
      MODIFICATIONS.setValidators(INSURNACE_INQUIRE_VALIDATORS['required']);
    } else {
      MODIFICATIONS.clearValidators();
      MODIFICATIONS.updateValueAndValidity();
    }
  }
}

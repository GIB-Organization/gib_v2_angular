import { FormControl, FormGroup } from "@angular/forms"
import { EEstimatedDistanceEnum, EMotionVectorEnum, EPartyTypeEnum, EPromoTypeEnum } from "../core/enums"

//request body IAdditionalData
export interface IAdditionalData{
    estimatedValue?: number | null,
    usePurpose?: number | null ,
    getDiscount?: boolean | null,
    promoType?: EPromoTypeEnum | null,
    workMail?: string | null,
    partyType?: EPartyTypeEnum | null,
    partyId?: number | null,
    promoCode?: string | null,
    driverDetails?: IDriverDetails,
    additionalDetails?: IAdditionalDetails,
    isDriverSection?: boolean | null,
    isAdditionalData?: boolean | null,
}

export interface IDriverDetails{
    idNumber?: number | null,
    birthYear?: number | null,
    birthMonth?: number | null,
    educationLevel?: number | null,
    childrenUnder16?: number | null,
    drivingPercent?: number | null,
    driverLicenseRestrict?: number | null,
    accidents5Years?: number | null,
    relativeRelation?: number | null,
    otherViolations?: boolean | null,
    violationsTypes?: number[] | null,
    sameAddress?: boolean | null,
    residenceCityId?: number | null,
    workCityId?: number | null,
    anotherCountryLicense?: boolean | null,
    licenseCountryId?: number | null,
    yearsHoldingLicense?: number | null,
}

export interface IAdditionalDetails{
    educationLevel?: number | null,
    childrenUnder16?: number | null,
    ownerBirthDate?: number | null,
    drivingRestriction?: number | null,
    parkingPlace?: number | null ,
    accidents5Years?: number | null,
    annualDistance?: EEstimatedDistanceEnum | null,
    motionVector?: EMotionVectorEnum | null,
    otherViolations?: boolean | null,
    violationTypes?: number[] | null,
    sameWorkCity?: boolean | null,
    workCityId?: number | null,
    anotherCountryLicense?: boolean | null,
    licenseCountryId?: number | null,
    yearsHoldingLicense?: number | null,
    carModified?: boolean | null,
    modifications?: string | null,
}

export interface IAdditionalDataFormGroup{
    estimatedValue: FormControl<number | null>,
    usePurpose: FormControl<number | null>, // UsePurposeLookupEnum
    getDiscount:  FormControl<boolean | null>,
    promoType:  FormControl<EPromoTypeEnum | null>,
    workMail:  FormControl<string | null>,
    partyType:  FormControl<EPartyTypeEnum | null>,
    partyId:  FormControl<number | null>,
    promoCode:  FormControl<string | null>,
    driverDetails: FormGroup<IDriverDetailsFormGroup>,
    additionalDetails: FormGroup<IAdditionalDetailsFormGroup>,
    isDriverSection:FormControl<boolean | null>,
    isAdditionalData:FormControl<boolean | null>,
}

export interface IDriverDetailsFormGroup{
    idNumber: FormControl<number | null>,
    birthYear: FormControl<number | null>,
    birthMonth: FormControl<number | null>,
    educationLevel: FormControl<number | null>, //EducationLevelLookupEnum
    childrenUnder16: FormControl<number | null>,
    drivingPercent: FormControl<number | null>, //DrivingPercentageLookupEnum
    driverLicenseRestrict: FormControl<number | null>, //DrivingRestrictionsLookupEnum
    accidents5Years: FormControl<number | null>,
    relativeRelation: FormControl<number | null>, //ReltiveRelationLookupEnum,
    otherViolations:  FormControl<boolean | null>,
    violationsTypes:  FormControl<number[] | null>, //ViolationTypeLookupEnum[]
    sameAddress:  FormControl<boolean | null>,
    residenceCityId:  FormControl<number | null>, //CitiesLookup
    workCityId:  FormControl<number | null>,
    anotherCountryLicense:  FormControl<boolean | null>,
    licenseCountryId: FormControl<number | null>,// CountriesLookup
    yearsHoldingLicense:  FormControl<number | null>,
}

export interface IAdditionalDetailsFormGroup{
    educationLevel: FormControl<number | null>, //EducationLevelLookupEnum
    childrenUnder16: FormControl<number | null>,
    ownerBirthDate: FormControl<number | null>, // will check if date format or month and year lists
    drivingRestriction: FormControl<number | null>, //DrivingRestrictionsLookupEnum
    parkingPlace: FormControl<number | null>, //ParkingPlaceLookupEnum
    accidents5Years: FormControl<number | null>,
    annualDistance: FormControl<EEstimatedDistanceEnum | null>,
    motionVector: FormControl<EMotionVectorEnum | null>,
    otherViolations: FormControl<boolean | null>,
    violationTypes: FormControl<number[] | null>, //ViolationTypeLookupEnum[]
    sameWorkCity: FormControl<boolean | null>, 
    workCityId: FormControl<number | null>, //CitiesLookup
    anotherCountryLicense: FormControl<boolean | null>,
    licenseCountryId: FormControl<number | null>,// CountriesLookup
    yearsHoldingLicense: FormControl<number | null>,
    carModified: FormControl<boolean | null>,
    modifications: FormControl<string | null>,
}

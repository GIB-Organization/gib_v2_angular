import { AdditionalDataFormService } from './../../../../services/additionalDataForm/additional-data-form.service';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { BaseLabelComponentComponent } from '../../../base-components/base-label-component/base-label-component.component';
import { BaseButtonComponentComponent } from '../../../base-components/base-button-component/base-button-component.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { TranslateModule } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';
import { LookupsStoreQuery } from '../../../../store/lookupsStore/lookups-store.query';
import { ELookupCategory } from '../../../../core/enums/lookups.enum';
import { MultiSelectModule } from 'primeng/multiselect';
import { CHILDREN_UNDER_16, FIVE_YEARS_ACCIDENTS, YEARS_HOLDING_LICENSE } from '../../../../core/constants';
import { AddressStoreQuery } from '../../../../store/addressStore/address-store.query';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputValidationAlertComponentComponent } from '../../../shared-components/input-validation-alert-component/input-validation-alert-component.component';

@Component({
  selector: 'app-owner-form-component',
  standalone: true,
  imports: [BaseLabelComponentComponent, BaseButtonComponentComponent, InputSwitchModule, DropdownModule, TranslateModule, UpperCasePipe, MultiSelectModule, ReactiveFormsModule, InputValidationAlertComponentComponent],
  templateUrl: './owner-form-component.component.html',
  styleUrl: './owner-form-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnerFormComponentComponent {
  lookupsStoreQuery = inject(LookupsStoreQuery);
  addressStoreQuery = inject(AddressStoreQuery);
  additionalDataFormService = inject(AdditionalDataFormService);
  form = this.additionalDataFormService.form;
  destroyRef = inject(DestroyRef)
  isOwnerDoc = new FormControl()
  get ELookupCategory(){
    return ELookupCategory
  }
  get FIVE_YEARS_ACCIDENTS(){
    return FIVE_YEARS_ACCIDENTS
  }
  get CHILDREN_UNDER_16(){
    return CHILDREN_UNDER_16
  }
  get YEARS_HOLDING_LICENSE(){
    return YEARS_HOLDING_LICENSE
  }
  get additionalDetails() {
    return this.form.controls.additionalDetails
  }
  get educationLevel() {
    return this.additionalDetails.controls.educationLevel
  }
  get childrenUnder16() {
    return this.additionalDetails.controls.childrenUnder16
  }
  get ownerBirthDate() {
    return this.additionalDetails.controls.ownerBirthDate
  }
  get drivingRestriction() {
    return this.additionalDetails.controls.drivingRestriction
  }
  get parkingPlace() {
    return this.additionalDetails.controls.parkingPlace
  }
  get accidents5Years() {
    return this.additionalDetails.controls.accidents5Years
  }
  get annualDistance() {
    return this.additionalDetails.controls.annualDistance
  }
  get motionVector() {
    return this.additionalDetails.controls.motionVector
  }
  get otherViolations() {
    return this.additionalDetails.controls.otherViolations
  }
  get violationTypes() {
    return this.additionalDetails.controls.violationTypes
  }
  get sameWorkCity() {
    return this.additionalDetails.controls.sameWorkCity
  }
  get workCityId() {
    return this.additionalDetails.controls.workCityId
  }
  get anotherCountryLicense() {
    return this.additionalDetails.controls.anotherCountryLicense
  }
  get licenseCountryId() {
    return this.additionalDetails.controls.licenseCountryId
  }
  get yearsHoldingLicense() {
    return this.additionalDetails.controls.yearsHoldingLicense
  }
  get carModified() {
    return this.additionalDetails.controls.carModified
  }
  get modifications() {
    return this.additionalDetails.controls.modifications
  }
  get isAdditionalData() {
    return this.form.controls.isAdditionalData
  }

  ngOnInit(): void {
    this.lookupsStoreQuery.defaultLookups$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (res) => {
        this.additionalDataFormService.defaultFormValue.additionalDetails = {
          ...this.additionalDataFormService.defaultFormValue.additionalDetails,
          educationLevel: res[ELookupCategory.educations].lookupId,
          drivingRestriction: res[ELookupCategory.medicalConditions].lookupId,
          parkingPlace: res[ELookupCategory.parkingLocations].lookupId,
          annualDistance: res[ELookupCategory.mileages].lookupId,
          motionVector: res[ELookupCategory.transmissionTypes].lookupId,
        }
        this.additionalDetails.patchValue(this.additionalDataFormService.defaultFormValue.additionalDetails)
      }
    })
  }

  openCloseSection(){
    this.isAdditionalData.setValue(!this.isAdditionalData.value);
    this.additionalDetails.reset(this.additionalDataFormService.defaultFormValue.additionalDetails)
  }
}

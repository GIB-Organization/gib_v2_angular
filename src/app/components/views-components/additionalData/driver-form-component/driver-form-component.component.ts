import { ChangeDetectionStrategy, Component, OnInit, inject, DestroyRef } from '@angular/core';
import { BaseLabelComponentComponent } from '../../../base-components/base-label-component/base-label-component.component';
import { BaseAlertComponentComponent } from '../../../base-components/base-alert-component/base-alert-component.component';
import { BaseButtonComponentComponent } from '../../../base-components/base-button-component/base-button-component.component';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { UpperCasePipe } from '@angular/common';
import { ELookupCategory } from '../../../../core/enums/lookups.enum';
import { LookupsStoreQuery } from '../../../../store/lookupsStore/lookups-store.query';
import { DateFactoryService } from '../../../../services/dateFactory/date-factory.service';
import { AddressStoreQuery } from '../../../../store/addressStore/address-store.query';
import { AdditionalDataFormService } from '../../../../services/additionalDataForm/additional-data-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MultiSelectModule } from 'primeng/multiselect';
import { IDriverDetails } from '../../../../models/additionalData.interface';
import { InputValidationAlertComponentComponent } from '../../../shared-components/input-validation-alert-component/input-validation-alert-component.component';
import { ConstantsService } from '../../../../services/core/constants/constants.service';

@Component({
  selector: 'app-driver-form-component',
  standalone: true,
  imports: [BaseLabelComponentComponent, BaseAlertComponentComponent, BaseButtonComponentComponent, TranslateModule, DropdownModule, InputNumberModule, UpperCasePipe, ReactiveFormsModule, MultiSelectModule, InputValidationAlertComponentComponent],
  templateUrl: './driver-form-component.component.html',
  styleUrl: './driver-form-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriverFormComponentComponent implements OnInit {
  constants = inject(ConstantsService)
  destroyRef = inject(DestroyRef)
  lookupsStoreQuery = inject(LookupsStoreQuery)
  dateFactoryService = inject(DateFactoryService)
  addressStoreQuery = inject(AddressStoreQuery)
  additionalDataFormService = inject(AdditionalDataFormService);
  form = this.additionalDataFormService.form;
  defaultFormValue!: Partial<IDriverDetails>;
  get ELookupCategory() {
    return ELookupCategory
  }
  get FIVE_YEARS_ACCIDENTS() {
    return this.constants.fiveYearsAccidentsList
  }
  get CHILDREN_UNDER_16() {
    return this.constants.chidrenUnder16List
  }
  get YEARS_HOLDING_LICENSE() {
    return this.constants.yearsHoldingLicenseList
  }
  get YES_NO() {
    return this.constants.yesNoList
  }
  get driverDetails() {
    return this.form.controls.driverDetails
  }
  get idNumber() {
    return this.driverDetails.controls.idNumber
  }
  get accidents5Years() {
    return this.driverDetails.controls.accidents5Years
  }
  get anotherCountryLicense() {
    return this.driverDetails.controls.anotherCountryLicense
  }
  get yearsHoldingLicense() {
    return this.driverDetails.controls.yearsHoldingLicense
  }
  get workCityId() {
    return this.driverDetails.controls.workCityId
  }
  get violationsTypes() {
    return this.driverDetails.controls.violationsTypes
  }
  get sameAddress() {
    return this.driverDetails.controls.sameAddress
  }
  get residenceCityId() {
    return this.driverDetails.controls.residenceCityId
  }
  get relativeRelation() {
    return this.driverDetails.controls.relativeRelation
  }
  get otherViolations() {
    return this.driverDetails.controls.otherViolations
  }
  get licenseCountryId() {
    return this.driverDetails.controls.licenseCountryId
  }
  get birthMonth() {
    return this.driverDetails.controls.birthMonth
  }
  get birthYear() {
    return this.driverDetails.controls.birthYear
  }
  get childrenUnder16() {
    return this.driverDetails.controls.childrenUnder16
  }
  get driverLicenseRestrict() {
    return this.driverDetails.controls.driverLicenseRestrict
  }
  get drivingPercent() {
    return this.driverDetails.controls.drivingPercent
  }
  get educationLevel() {
    return this.driverDetails.controls.educationLevel
  }
  get isDriverSection() {
    return this.form.controls.isDriverSection
  }

  ngOnInit(): void {
    this.lookupsStoreQuery.defaultLookups$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (res) => {
        this.additionalDataFormService.defaultFormValue.driverDetails = {
          ...this.additionalDataFormService.defaultFormValue.driverDetails,
          educationLevel: res[ELookupCategory.educations]?.lookupId,
          driverLicenseRestrict: res[ELookupCategory.medicalConditions]?.lookupId,
          drivingPercent: res[ELookupCategory.drivingPercentages]?.lookupId,
          relativeRelation: res[ELookupCategory.relationships]?.lookupId,
        }
        this.driverDetails.patchValue(this.additionalDataFormService.defaultFormValue.driverDetails);
      }
    })
  }
  cancelDriver(){
    this.isDriverSection.setValue(false);
    this.driverDetails.reset(this.additionalDataFormService.defaultFormValue.driverDetails);
  }
}

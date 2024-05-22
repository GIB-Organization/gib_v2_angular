import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { BaseLabelComponentComponent } from './../../../base-components/base-label-component/base-label-component.component';
import { BaseButtonComponentComponent } from './../../../base-components/base-button-component/base-button-component.component';
import { BaseCaptchaComponentComponent } from './../../../base-components/base-captcha-component/base-captcha-component.component';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { NgbCalendar, NgbDateAdapter, NgbDatepicker, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { IFormStructure } from '../../../../models/layout-models/radio.interface';
import { EPopover } from '../../../../core/enums/popover.enum';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EInsurancePurpose, EVehicleRegisterType } from '../../../../core/enums';
import { InputValidationAlertComponentComponent } from '../../../shared-components/input-validation-alert-component/input-validation-alert-component.component';
import { IInsuranceInquireFormBuilder } from '../../../../models/insuranceInquire.interface';
import { DropdownModule } from 'primeng/dropdown';
import { InsuranceInquireStoreService } from '../../../../store/insuranceInquireStore/insurance-inquire-store.service';
import { INSURNACE_INQUIRE_VALIDATORS } from '../../../../core/validations';
import { InsuranceInquireStoreQueryService } from '../../../../store/insuranceInquireStore/insurance-inquire-store.query';
import { CustomDateAdapterService } from '../../../../services/customDateAdapter/custom-date-adapter.service';
import { DateFactoryService } from '../../../../services/dateFactory/date-factory.service';

@Component({
  selector: 'app-car-insurance-form-component',
  standalone: true,
  imports: [BaseButtonComponentComponent, TranslateModule, NgbDatepicker, NgbInputDatepicker, BaseCaptchaComponentComponent, BaseLabelComponentComponent, InputNumberModule, AutoCompleteModule, ReactiveFormsModule, InputValidationAlertComponentComponent, DropdownModule],
  templateUrl: './car-insurance-form-component.component.html',
  styleUrl: './car-insurance-form-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NgbDateAdapter, useClass: CustomDateAdapterService }]
})

export class CarInsuranceFormComponentComponent implements OnInit {
  private insuranceInquireStoreService = inject(InsuranceInquireStoreService);
  insuranceInquireStoreQuery = inject(InsuranceInquireStoreQueryService);
  dateFactoryService = inject(DateFactoryService)
  #destroyRef = inject(DestroyRef);
  datePicker = inject(NgbCalendar);
  dateAdapter = inject(NgbDateAdapter);
  fb = inject(FormBuilder);
  cdr = inject(ChangeDetectorRef)
  captchaCodeIsCorrect: WritableSignal<boolean> = signal(false);
  minDate = this.datePicker.getNext(this.datePicker.getToday())
  isLoading = toSignal(this.insuranceInquireStoreQuery.selectLoading());
  insuranceFormStructure: IFormStructure = {
    insurancePurpose: {
      label: 'views.home.insuranceForm.insurancePurpose',
      name: 'purpose',
      radioButtons: [
        {
          label: 'views.home.insuranceForm.newInsurance',
          id: 'insurancePurposeRadio',
          value: EInsurancePurpose.newInsurance,
        },
        {
          label: 'views.home.insuranceForm.ownershipTransfer',
          id: 'insurancePurposeRadio',
          value: EInsurancePurpose.ownershipTransfer,
        },
      ]
    },
    registrationType: {
      label: 'views.home.insuranceForm.registerType',
      name: 'vehicleType',
      radioButtons: [
        {
          label: 'views.home.insuranceForm.form',
          id: 'registerTypeRadio',
          value: EVehicleRegisterType.form,
        },
        {
          label: 'views.home.insuranceForm.customCard',
          id: 'registerTypeRadio',
          value: EVehicleRegisterType.customcards,
        },
      ]
    }
  }
  insuranceForm: FormGroup = this.fb.group<IInsuranceInquireFormBuilder>({
    sellerId: this.fb.control(null),
    idNumber: this.fb.nonNullable.control(null, INSURNACE_INQUIRE_VALIDATORS['idNumber']),
    purpose: this.fb.nonNullable.control(EInsurancePurpose.newInsurance),
    serialNumber: this.fb.nonNullable.control(0, INSURNACE_INQUIRE_VALIDATORS['serialNumber']),
    startDate: this.fb.nonNullable.control(this.dateAdapter.toModel(this.minDate), INSURNACE_INQUIRE_VALIDATORS['startDate']),
    vehicleRegisterType: this.fb.nonNullable.control(EVehicleRegisterType.form),
    vehicleYear: this.fb.control(null),
    customsNumber: this.fb.control(null),
    birthYear: this.fb.control(null),
    birthMonth: this.fb.control(null),
    agreedTermsConditions: this.fb.nonNullable.control(false, [Validators.requiredTrue])
  })
  get EPopover() {
    return EPopover
  }
  get EInsurancePurpose() {
    return EInsurancePurpose
  }
  get EVehicleRegisterType() {
    return EVehicleRegisterType
  }

  ngOnInit(): void {
    this.purposeChange();
    this.vehicleTypeChange()
  }

  vehicleYearValidator() {
    const VEHICLE_TYPE = this.getControl('vehicleRegisterType');
    const vehicleYear = this.getControl('vehicleYear');
    const VALIDATIONS = (VEHICLE_TYPE?.value === EVehicleRegisterType.customcards) ? INSURNACE_INQUIRE_VALIDATORS['vehicleYear'] : null;
    vehicleYear?.setValidators(VALIDATIONS);
    vehicleYear?.updateValueAndValidity()
  }
  serialNumberValidator() {
    const VEHICLE_TYPE = this.getControl('vehicleRegisterType');
    const SERIAL_NUMBER = this.getControl('serialNumber');
    const VALIDATIONS = (VEHICLE_TYPE?.value !== EVehicleRegisterType.customcards ? INSURNACE_INQUIRE_VALIDATORS['serialNumber'] : null)
    SERIAL_NUMBER?.setValidators(VALIDATIONS);
    SERIAL_NUMBER?.updateValueAndValidity()
  }
  sellerIdValidator() {
    const PURPOSE = this.getControl('purpose');
    const BUYER_ID = this.getControl('sellerId');
    const VALIDATIONS = (PURPOSE?.value === EInsurancePurpose.ownershipTransfer ? INSURNACE_INQUIRE_VALIDATORS['idNumber'] : null)
    BUYER_ID?.setValidators(VALIDATIONS);
    BUYER_ID?.updateValueAndValidity()
  }
  birthDateValidator() {
    const BIRTH_YEAR = this.getControl('birthYear');
    const BIRTH_MONTH = this.getControl('birthMonth');
    const PURPOSE = this.getControl('purpose');
    const VALIDATIONS = (PURPOSE?.value === EInsurancePurpose.ownershipTransfer ? INSURNACE_INQUIRE_VALIDATORS['birthDate'] : null)
    BIRTH_YEAR?.setValidators(VALIDATIONS);
    BIRTH_MONTH?.setValidators(VALIDATIONS);
    BIRTH_YEAR?.updateValueAndValidity()
    BIRTH_MONTH?.updateValueAndValidity()
  }
  updateInputsValidations() {
    this.vehicleYearValidator()
    this.serialNumberValidator()
    this.sellerIdValidator()
    this.birthDateValidator()
  }
  purposeChange() {
    const purpose = this.insuranceForm.controls['purpose'];
    const vehicleType = this.insuranceForm.controls['vehicleRegisterType'];
    purpose.valueChanges.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
      next: (res) => {
        if (res === EInsurancePurpose.ownershipTransfer && vehicleType.value === EVehicleRegisterType.customcards) {
          vehicleType.setValue(EVehicleRegisterType.form);
        }
        this.updateInputsValidations();
      }
    });
  }
  vehicleTypeChange() {
    const purpose = this.insuranceForm.controls['purpose'];
    const vehicleType = this.insuranceForm.controls['vehicleRegisterType'];
    vehicleType.valueChanges.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
      next: (res) => {
        if (res === EVehicleRegisterType.customcards && purpose.value === EInsurancePurpose.ownershipTransfer) {
          purpose.setValue(EInsurancePurpose.newInsurance);
        }
        this.updateInputsValidations();
      }
    });
  }

  controlNotValid(controlName: string) {
    const CONTROL = this.insuranceForm?.controls[controlName]
    return (CONTROL.invalid && CONTROL.touched)
  }
  getControl(controlName: string) {
    return this.insuranceForm?.get(controlName);
  }

  submit() {
    this.insuranceInquireStoreService.inquireInsurance(this.insuranceForm.value, this.#destroyRef);
  }
}
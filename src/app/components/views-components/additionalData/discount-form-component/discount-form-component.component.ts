import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { IRadioInput } from '../../../../models/layout-models/radio.interface';
import { BaseLabelComponentComponent } from '../../../base-components/base-label-component/base-label-component.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { BaseButtonComponentComponent } from '../../../base-components/base-button-component/base-button-component.component';
import { ELookupCategory } from '../../../../core/enums/lookups.enum';
import { LookupsStoreQuery } from '../../../../store/lookupsStore/lookups-store.query';
import { AdditionalDataFormService } from '../../../../services/additionalDataForm/additional-data-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EPartyTypeEnum, EPromoTypeEnum } from '../../../../core/enums';
import { InputValidationAlertComponentComponent } from '../../../shared-components/input-validation-alert-component/input-validation-alert-component.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-discount-form-component',
  standalone: true,
  imports: [BaseLabelComponentComponent, InputNumberModule, DropdownModule, TranslateModule, TitleCasePipe, BaseButtonComponentComponent, UpperCasePipe, ReactiveFormsModule, InputValidationAlertComponentComponent],
  templateUrl: './discount-form-component.component.html',
  styleUrl: './discount-form-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscountFormComponentComponent implements OnInit {
  #translate = inject(TranslateService);
  lookupsStoreQuery = inject(LookupsStoreQuery);
  additionalDataFormService = inject(AdditionalDataFormService);
  destroyRef = inject(DestroyRef)
  form = this.additionalDataFormService.form;
  affiliationRadios: IRadioInput[] = [
    {
      id: '0',
      label: 'views.insuranceShow.workMail',
      value: EPromoTypeEnum.email,
    },
    {
      id: ' 1',
      label: 'public.id',
      value: EPromoTypeEnum.id,
    },
    {
      id: '2',
      label: 'views.insuranceShow.promoCode',
      value: EPromoTypeEnum.code,
    },
  ]
  partyTypeArr: { id: number, name: string }[] = [
    {
      id: EPartyTypeEnum.mail,
      name: this.#translate.instant('partyTypeEnum.' + EPartyTypeEnum.mail)
    },
    {
      id: EPartyTypeEnum.ourParty,
      name: this.#translate.instant('partyTypeEnum.' + EPartyTypeEnum.ourParty, { companyName: this.#translate.instant('appName') })
    },
  ]
  get EPromoTypeEnum() {
    return EPromoTypeEnum
  }
  get ELookupCategory() {
    return ELookupCategory
  }
  get estimatedValue() {
    return this.form.controls.estimatedValue
  }
  get usePurpose() {
    return this.form.controls.usePurpose
  }
  get getDiscount() {
    return this.form.controls.getDiscount
  }
  get promoType() {
    return this.form.controls.promoType
  }
  get workMail() {
    return this.form.controls.workMail
  }
  get partyType() {
    return this.form.controls.partyType
  }
  get promoCode() {
    return this.form.controls.promoCode
  }
  get partyId() {
    return this.form.controls.partyId
  }

  ngOnInit(): void {
    this.lookupsStoreQuery.defaultLookups$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (res) => {
        this.usePurpose.setValue(res[ELookupCategory.vehicleUses]?.lookupId)
      }
    })
  }
}

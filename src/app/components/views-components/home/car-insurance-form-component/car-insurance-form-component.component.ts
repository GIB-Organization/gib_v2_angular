import { BaseButtonComponentComponent } from './../../../base-components/base-button-component/base-button-component.component';
import { BaseCaptchaComponentComponent } from './../../../base-components/base-captcha-component/base-captcha-component.component';
import { Component } from '@angular/core';
import { NgbDatepicker, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

interface IRadioInput{
  label:string,
  id:string,
  value:string | boolean | number,
}

interface IFormStructure{
  insurancePurpose:{
    label: string,
    radioButtons:IRadioInput[]
  },
  registrationType:{
    label: string,
    radioButtons:IRadioInput[]
  }
}

@Component({
  selector: 'app-car-insurance-form-component',
  standalone: true,
  imports: [BaseButtonComponentComponent, TranslateModule, NgbDatepicker, NgbInputDatepicker, BaseCaptchaComponentComponent],
  templateUrl: './car-insurance-form-component.component.html',
  styleUrl: './car-insurance-form-component.component.scss'
})

export class CarInsuranceFormComponentComponent {
  insuranceFormStructure: IFormStructure={
    insurancePurpose:{
      label: 'views.home.insuranceForm.insurancePurpose',
      radioButtons:[
        {
          label:'views.home.insuranceForm.newInsurance',
          id:'insurancePurposeRadio',
          value:0
        },
        {
          label:'views.home.insuranceForm.ownershipTransfer',
          id:'insurancePurposeRadio',
          value:1
        },
      ]
    },
    registrationType:{
      label: 'views.home.insuranceForm.registerType',
      radioButtons:[
        {
          label:'views.home.insuranceForm.form',
          id:'registerTypeRadio',
          value:0
        },
        {
          label:'views.home.insuranceForm.customCard',
          id:'registerTypeRadio',
          value:1
        },
      ]
    }
  }
}

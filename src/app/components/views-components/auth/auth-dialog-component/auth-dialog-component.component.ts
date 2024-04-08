import { ChangeDetectionStrategy, Component, WritableSignal, model, signal } from '@angular/core';
import { BaseImageComponentComponent } from '../../../base-components/base-image-component/base-image-component.component';
import { BaseButtonComponentComponent } from '../../../base-components/base-button-component/base-button-component.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgComponentOutlet, UpperCasePipe } from '@angular/common';
import { DialogComponentComponent } from '../../../shared-components/dialog-component/dialog-component.component';
import { EFormType } from '../../../../core/enums/auth.enum';
import { IAuthDialog } from '../../../../models/layout-models/auth.interface';
import { AuthDialogFactory } from '../../../../core/classes/AuthDialog';


@Component({
  selector: 'app-auth-dialog-component',
  standalone: true,
  imports: [DialogComponentComponent, BaseImageComponentComponent, BaseButtonComponentComponent, TranslateModule, UpperCasePipe, NgComponentOutlet ],
  templateUrl: './auth-dialog-component.component.html',
  styleUrl: './auth-dialog-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthDialogComponentComponent {

  public _AuthDialogFactory = new AuthDialogFactory();

  get EFormType(){
    return EFormType
  }

  visible = model<boolean>(false);
  visibleForm: WritableSignal<IAuthDialog> = signal(this._AuthDialogFactory.createDialogContent(EFormType.login));

  openComponent(type : EFormType){
    this.visibleForm.set(this._AuthDialogFactory.createDialogContent( type ))
  }
}

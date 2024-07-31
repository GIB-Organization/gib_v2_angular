import { FormControl } from "@angular/forms";

export interface ILoginDTO {
    email?: string;
    password?: string;
    otpCode?: string | null;
}
export interface ILoginDTOFormGroup {
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    otpCode?: FormControl<string | null>;
}

export interface IRegisterDTO {
  fullName: string | null;
  nationalId: string | null;
  phoneNumber: string | null;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
  agreeTerms: boolean | null;
  otpCode?: string | null;
}
export interface IRegisterDTOFormGroup {
  fullName: FormControl<string | null>;
  nationalId: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
  agreeTerms: FormControl<boolean | null>;
  otpCode?: FormControl<string | null>;
}

export interface IRefreshTokenDTO {
  accessToken?: string;
  refreshToken?: string;
}

export interface ILoginResponse {
  userId?: string;
  username?: string;
  token?: IRefreshTokenDTO;
}

export type IRegisterOtp = Pick<IRegisterDTO, 'nationalId' | 'phoneNumber'>;
export type ILoginOtp = Pick<IRegisterDTO, 'email' | 'password'>;

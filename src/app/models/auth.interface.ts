import { FormControl } from "@angular/forms";

export interface ILoginDTO {
    email?: string;
    password?: string;
}

export interface IRegisterDTO {
  fullName?: string | FormControl<string | null>;
  nationalId?: string | FormControl;
  phoneNumber?: string | FormControl;
  email?: string | FormControl;
  password?: string | FormControl;
  confirmPassword?: string | FormControl;
}
export interface IRegisterDTOFormGroup {
  fullName: FormControl<string | null>;
  nationalId: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
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

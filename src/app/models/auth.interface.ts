export interface ILoginDTO {
    email?: string;
    password?: string;
}

export interface IRegisterDTO {
  fullName?: string;
  nationalId?: string;
  phoneNumber?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
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

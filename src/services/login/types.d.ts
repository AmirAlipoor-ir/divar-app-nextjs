export interface SendOtp {
  number: string;
}

export interface CheckOtpRes {
  message: string;
  accessToken: string;
  refreshToken: string;
  accessTokenCookie: string;
  refreshTokenCookie: string;
}

export type SendOtpRes = string;

export interface GetOtpRes {
  accessTokenCookie: string;
  refreshTokenCookie: string;
  accessToken: string;
  refreshToken: string;
}

export interface CheckOtpCode {
  phoneNumber: string;
  otpCode: string;
}
export interface WhoAmIRes {
  id: string;
  mobile: string;
  role: string;
  createdAt: string;
}

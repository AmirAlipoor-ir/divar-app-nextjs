export interface SendOtp {
  number: string;
}

export interface CheckOtpRes {
  message: string;
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
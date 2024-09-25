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

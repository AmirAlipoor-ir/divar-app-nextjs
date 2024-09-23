export interface SendOtp {
  number: string;
}

export interface CheckOtpRes {
  message: string;
  accessToken: string;
  refreshToken: string;
}

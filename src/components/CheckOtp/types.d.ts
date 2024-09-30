export type CheckOtpRes = {
  accessToken: string;
  message: string;
  refreshToken: string;
  refreshTokenCookie: string
};

export type OtpRes = {
  phoneNumber: string;
  otpCode: string;
};

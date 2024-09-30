export type CheckOtpRes = {
  accessToken: string;
  message: string;
  refreshToken: string;
};

export type OtpRes = {
  phoneNumber: string;
  otpCode: string;
};

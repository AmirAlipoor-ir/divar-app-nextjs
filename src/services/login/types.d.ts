export type SendOtp = {
  number: string;
};

export type CheckOtpRes = {
  message: string;
  accessToken: string;
  refreshToken: string;
};

export type SendRefreshToken = {
  message: string;
  accessToken: string;
  refreshToken: string;
};

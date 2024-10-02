export interface CheckOtpRes {
  accessToken: string;
  refreshToken: string;
}

export interface DecodedToken {
  exp: number;
}

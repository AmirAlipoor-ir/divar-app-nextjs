export type AddFormEvent = FormEvent<HTMLFormElement>;

export type AddInputEvent = ChangeEvent<HTMLInputElement>;

export interface CheckOtpRes {
  message: string;
  accessToken: string;
  refreshToken: string;
}

export type AddFormEvent = FormEvent<HTMLFormElement>;

export type AddInputEvent = ChangeEvent<HTMLInputElement>;

export type CheckOtpRes = {
  accessToken: string;
  message: string;
  refreshToken: string;
};

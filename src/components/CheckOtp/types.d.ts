export type AddFormEvent = FormEvent<HTMLFormElement>;

export type AddInputEvent = ChangeEvent<HTMLInputElement>;

export type CheckOtpRes = {
    message: string;
    accessToken: string;
    refreshToken: string;
  };
  
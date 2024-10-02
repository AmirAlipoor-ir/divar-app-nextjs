import { Dispatch, SetStateAction } from "react";

export interface AddStep {
  setStep: Dispatch<SetStateAction<number>>;
}

export interface PhoneNumberRes {
  phoneNumber: string;
}

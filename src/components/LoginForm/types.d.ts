import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

export type AddStep = {
  setStep: Dispatch<SetStateAction<number>>;
};

export type AddFormEvent = FormEvent<HTMLFormElement>;

export type AddInputEvent = ChangeEvent<HTMLInputElement>;
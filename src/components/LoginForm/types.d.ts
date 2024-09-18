import { Dispatch, SetStateAction } from "react";

export type AddStep = {
  setStep: Dispatch<SetStateAction<number>>;
};

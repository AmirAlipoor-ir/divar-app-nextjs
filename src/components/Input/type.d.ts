import { UseFormRegister } from "react-hook-form";

export interface InputRes {
  name: string;
  type: string;
  register: UseFormRegister<IFormValues>;
}

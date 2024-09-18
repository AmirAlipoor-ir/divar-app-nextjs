"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { useSendOtpMutation } from "@/services/login";

import { AddStep } from "./types";

export const LoginForm = ({ setStep }: AddStep) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [createUser] = useSendOtpMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser(phoneNumber);
    setPhoneNumber("");
  };

  const handleChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const AddOneStep = () => {
    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-3 text-xl pt-5">
        <label htmlFor="phonenumber">phone number</label>
        <input
          className="rounded-md border-2 px-3 h-10 w-80"
          type="text"
          id="phonenumber"
          value={phoneNumber}
          placeholder="enter phonenumber"
          onChange={handleChangePhoneNumber}
        />
      </div>
      <button
        onClick={() => AddOneStep()}
        type="submit"
        className="w-80 border-2 mt-3 rounded-md text-white bg-red-600 py-2 text-xl "
      >
        Add code
      </button>
    </form>
  );
};
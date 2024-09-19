"use client";

import { useState } from "react";

import { useSendOtpMutation } from "@/services/login";

import { AddFormEvent, AddInputEvent, AddStep } from "./types";

export const LoginForm = ({ setStep }: AddStep) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [createUser, { isLoading }] = useSendOtpMutation();

  const handleSubmit = async (e: AddFormEvent) => {
    try {
      e.preventDefault();
      await createUser(phoneNumber).unwrap();
      sessionStorage.setItem("phoneNumber", phoneNumber);
      setPhoneNumber("");
      setStep(2);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePhoneNumber = (e: AddInputEvent) => {
    setPhoneNumber(e.target.value);
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
      <div>
        {isLoading ? (
          <span>sendig code to {phoneNumber} phoneNumber</span>
        ) : (
          <button
            type="submit"
            className="w-80 border-2 mt-3 rounded-md text-white bg-red-600 py-2 text-xl"
          >
            Add code
          </button>
        )}
      </div>
    </form>
  );
};

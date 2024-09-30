"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

import toast from "react-hot-toast";

import { useSendOtpMutation } from "@/services/login";

import { AddFormEvent, AddInputEvent, AddStep } from "./types";

export const LoginForm = ({ setStep }: AddStep) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [createUser, { isLoading }] = useSendOtpMutation();

  const router = useRouter();

  const handleSubmit = async (e: AddFormEvent) => {
    try {
      e.preventDefault();
      await createUser(phoneNumber).unwrap();
      sessionStorage.setItem("phoneNumber", phoneNumber);
      setPhoneNumber("");
      setStep(2);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const handleChangePhoneNumber = (e: AddInputEvent) => {
    setPhoneNumber(e.target.value);
  };

  if (Cookies.get("accessTokenCookie")) {
    router.push("/dashboard");
  }

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
        <button
          disabled={isLoading}
          type="submit"
          className="w-80 border-2 mt-3 rounded-md text-white bg-red-600 py-2 text-xl"
        >
          {isLoading ? "Loading ...." : "Add code"}
        </button>
        {isLoading && (
          <span className="block">
            The code has been sent to {phoneNumber} phoneNumber ..
          </span>
        )}
      </div>
    </form>
  );
};

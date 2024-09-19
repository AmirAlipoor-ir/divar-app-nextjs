"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useCheckOtpMutation } from "@/services/login";

import { AddFormEvent, AddInputEvent,CheckOtpRes } from "./types";

import { setCookies } from "@/utils/cookies";

const CheckOtp = () => {
  const [otpCode, setOtpCode] = useState("");

  const [sendOtp, { isLoading, isSuccess }] = useCheckOtpMutation();

  const router = useRouter();

  const handleOtpCode = (e: AddInputEvent) => {
    setOtpCode(e.target.value);
  };

  const handleSubmitOtp = async (e: AddFormEvent) => {
    try {
      e.preventDefault();
      const data: CheckOtpRes = await sendOtp({
        phoneNumber: sessionStorage.getItem("phoneNumber")!,
        otpCode,
      }).unwrap();
      setCookies({data})
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmitOtp}
        className="flex flex-col gap-y-3 text-xl pt-5"
      >
        <label htmlFor="phoneNumber">Enter the code</label>
        <input
          type="text"
          placeholder="Enter code"
          className="rounded-md border-2 px-3 h-10 w-80"
          id="phonenumber"
          value={otpCode}
          onChange={handleOtpCode}
        />
        <div>
          <button
            type="submit"
            className="w-80 border-2 mt-3 rounded-md text-white bg-red-600 py-2 text-xl "
            disabled={isLoading}
          >
            {isLoading ? "Loading" : "Add code"}
          </button>
        </div>
      </form>
      {isSuccess ? <span>you login successfully</span> : null}
    </div>
  );
};

export default CheckOtp;

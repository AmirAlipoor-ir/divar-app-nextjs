"use client";

import { useState } from "react";

import Cookies from "js-cookie";

import { useCheckOtpMutation, useChekRefreshTokenMutation } from "@/services/login";

import { AddFormEvent, AddInputEvent } from "./types";

const CheckOtp = () => {
  const [otpCode, setOtpCode] = useState("");

  const [sendOtp, { isLoading, isSuccess }] = useCheckOtpMutation();

  const [refreshToken] = useChekRefreshTokenMutation()

  const handleOtpCode = (e: AddInputEvent) => {
    setOtpCode(e.target.value);
  };

  const handleSubmitOtp = async (e: AddFormEvent) => {
    try {
      e.preventDefault();
      const data = await sendOtp({
        phoneNumber: sessionStorage.getItem("phoneNumber")!,
        otpCode,
      }).unwrap();
      Cookies.set("accessTokenCookie", data.accessToken);
      Cookies.set("refreshTokenCookie", data.refreshToken);
      refreshToken(Cookies.get("refreshTokenCookie"))
    } catch (error) {
      console.log(error);
    }
  };



  if (Cookies.get("accessTokenCookie")) {
    return <div>your login is done</div>;
  }

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

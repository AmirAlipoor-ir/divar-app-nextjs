"use client";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { SubmitHandler, useForm } from "react-hook-form";

import { setCookies } from "@/utils/cookies";

import { useCheckOtpMutation } from "@/services/login";

import { OtpRes } from "./types";

export const CheckOtp = () => {
  const { register, handleSubmit } = useForm<OtpRes>();

  const [sendOtp, { isLoading }] = useCheckOtpMutation();

  const router = useRouter();

  const onSubmit: SubmitHandler<OtpRes> = async (e) => {
    try {
      const data = await sendOtp({
        phoneNumber: sessionStorage.getItem("phoneNumber")!,
        otpCode: e.otpCode,
      }).unwrap();
      setCookies({ data });
      router.push("/dashboard");
      toast.success("you login successfully");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-3 text-xl pt-5"
      >
        <label htmlFor="phoneNumber">Enter the code</label>
        <input
          type="text"
          placeholder="Enter code"
          className="rounded-md border-2 px-3 h-10 w-80"
          id="phonenumber"
          {...register("otpCode", { required: true })}
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
    </div>
  );
};

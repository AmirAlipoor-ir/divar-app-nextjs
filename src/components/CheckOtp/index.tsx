"use client";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { SubmitHandler, useForm } from "react-hook-form";

import { OtpRes } from "./types";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import Cookies from "js-cookie";

import { setCookies } from "@/utils/cookies";

import { useCheckOtpMutation } from "@/services/login";

const schema = z.object({
  otpCode: z
    .string()
    .min(5, { message: "Enter the code correctly !!!" })
    .max(5, { message: "Enter the code correctly !!!" }),
});

export const CheckOtp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpRes>({
    resolver: zodResolver(schema),
  });

  const [sendOtp, { isLoading }] = useCheckOtpMutation();

  const { push } = useRouter();

  const cookie = Cookies.get("accessToken");

  if (cookie) {
    push("/dashboard");
  }

  const onSubmit: SubmitHandler<OtpRes> = async (e) => {
    try {
      const data = await sendOtp({
        phoneNumber: sessionStorage.getItem("phoneNumber")!,
        otpCode: e.otpCode,
      }).unwrap();
      push("/dashboard");
      setCookies({ data });
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
        <label htmlFor="otpCode">Enter the code</label>
        <input
          type="text"
          placeholder="Enter code"
          className="rounded-md border-2 px-3 h-10 w-80"
          id="otpCode"
          {...register("otpCode", { required: true })}
        />

        {errors.otpCode && (
          <span className="text-red-500">{errors.otpCode.message}</span>
        )}

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

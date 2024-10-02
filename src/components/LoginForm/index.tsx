"use client";

import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import toast from "react-hot-toast";

import { useSendOtpMutation } from "@/services/login";

import { AddStep, PhoneNumberRes } from "./types";

const schema = z.object({
  phoneNumber: z
    .string()
    .min(11, { message: "Enter the phone number correctly !!!" }),
});

export const LoginForm = ({ setStep }: AddStep) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PhoneNumberRes>({
    resolver: zodResolver(schema),
  });

  const [createUser, { isLoading }] = useSendOtpMutation();

  const { push } = useRouter();

  const token = Cookies.get("accessToken");

  if (token) {
    push("/dashboard");
  }

  const onSubmit: SubmitHandler<PhoneNumberRes> = async (data) => {
    try {
      await createUser(data.phoneNumber).unwrap();
      sessionStorage.setItem("phoneNumber", data.phoneNumber);
      reset();
      setStep(2);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-3 text-xl pt-5">
        <label htmlFor="phonenumber">phone number</label>
        <input
          className="rounded-md border-2 px-3 h-10 w-80"
          type="text"
          id="phonenumber"
          {...register("phoneNumber", { required: true })}
          placeholder="enter phonenumber"
        />
        {errors.phoneNumber && (
          <span className="text-red-500">{errors.phoneNumber.message}</span>
        )}
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
            The code has been sent to phoneNumber ..
          </span>
        )}
      </div>
    </form>
  );
};

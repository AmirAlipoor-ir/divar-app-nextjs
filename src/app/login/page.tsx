"use client";

import { useState } from "react";

import { LoginForm } from "@/components/LoginForm";
import { CheckOtp } from "@/components/CheckOtp";

export default function LoginPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex justify-center">
      {step == 1 ? <LoginForm setStep={setStep} /> : <CheckOtp />}
    </div>
  );
}

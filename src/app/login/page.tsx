"use client";

import CheckOtp from "@/components/CheckOtp";
import { LoginForm } from "@/components/LoginForm";
import { useState } from "react";

export default function LoginPage() {
  const [step, setStep] = useState(1);
  return (
    <div className="flex justify-center">
      {step == 1 ? <LoginForm setStep={setStep} /> : <CheckOtp />}
    </div>
  );
}

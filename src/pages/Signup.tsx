import { SignupForm } from "@/components/auth/SignupForm";

export default function Signup() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>
      <SignupForm />
    </div>
  );
} 
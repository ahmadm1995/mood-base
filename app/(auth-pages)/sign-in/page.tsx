import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login() {
  
  return (
    <>
      <form className="flex flex-col  mx-auto border-2 border-dashed">
        <div className="my-10 mx-8">
          <h1 className="text-2xl  font-medium">Welcome back!</h1>
          <p className="text-sm text text-foreground">
           Log in to continue tracking your mood and sleep.
          </p>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="you@example.com" required />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              minLength={6}
              required
            />
            <SubmitButton formAction={signInAction} pendingText="Signing up...">
              Sign In
            </SubmitButton>

            <p className="text-sm text text-foreground">
            Haven't got an account?{" "}
            <Link className="text-primary font-medium underline" href="/sign-up">
              Sign Up
            </Link>
          </p>
          </div>
        </div>
      </form>
      
    </>
  );
}

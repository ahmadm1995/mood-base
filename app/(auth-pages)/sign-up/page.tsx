import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default async function Signup() {
  

  return (
    <>
      <form className="flex flex-col  mx-auto border-2 border-dashed">
        <div className="my-10 mx-8">
          <h1 className="text-2xl  font-medium">Create an account</h1>
          <p className="text-sm text text-foreground">
          Join to track your daily mood and sleep with ease.
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
            <SubmitButton formAction={signUpAction} pendingText="Signing up...">
              Sign up
            </SubmitButton>

            <p className="text-sm text text-foreground">
            Already got an account?{" "}
            <Link className="text-primary font-medium underline" href="/sign-in">
              Log in
            </Link>
          </p>
          </div>
        </div>
      </form>
      
    </>
  );
}
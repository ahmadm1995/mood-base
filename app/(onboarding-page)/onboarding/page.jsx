import React from 'react'
import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

function onboarding() {
  return (
    <>
      
         <form className="flex flex-col mx-auto border-2 border-dashed">
            <div className="my-10 mx-8">
              <h1 className="text-2xl  font-medium">Personalize your experience</h1>
              <p className="text-sm text text-foreground">
               Add your name and a profile picture to make Mood yours.
              </p>
              <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
                <Label htmlFor="email">Name</Label>
                <Input name="name" placeholder="Jane Appleseed" required />

                <SubmitButton formAction={signInAction} pendingText="Signing up...">
                  Start Tracking
                </SubmitButton>
    
               
              </div>
            </div>
          </form>
      
    </>
  )
}

export default onboarding
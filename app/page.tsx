import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Signup from "./(auth-pages)/sign-up/page";

export default async function Home() {
  return (
    <>
      
      <div className="flex justify-center items-center flex-grow ">
        <Signup />
      </div>
      
    </>
  );
}

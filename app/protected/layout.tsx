
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  const supabase = await createClient()
  const { data: {user} } = await supabase.auth.getUser()

  if(!user) {
    redirect("/sign-in")
  } 
  return (
    <div className="flex  flex-col w-full h-full min-h-screen bg-gradient-blue">{children}</div>
  );
}

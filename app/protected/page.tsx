import { SubmitButton } from "@/components/submit-button";
import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import AverageWrapper from '@/wrapper/average-wrapper';
import TrendWrapper from "@/wrapper/trend-wrapper";





export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Fetch the profile data for the current user
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (profileError) {
    console.error("Error fetching profile:", profileError);
  }

  const firstName = profile?.full_name ? profile.full_name.split(' ')[0] : 'User';

  const { data: moodData, error: moodError} = await supabase
    .from('mood_entries')
    .select('*')
    .eq('user_id', user.id);

  if(moodError) {
    console.error("Error fetching mood data:", moodError);
  }


  const uniqueMoodLevels = [...new Set(moodData?.map(entry=> entry.mood))]
  

  const { data: moodQuotesData, error: moodQuotesError} = await supabase
    .from('mood_quotes')
    .select('*')
    .in('mood_level', uniqueMoodLevels);

    if(moodQuotesError) {
      console.error("Error fetching mood quotes data:", moodQuotesError);
    }

  

  return (
    <div className="w-full flex flex-col gap-12 flex-grow ">
      {/* Header */}
        <div className="flex justify-between mx-[135px] mt-10 border-dashed border-2 border-gray-300 ">
          <h1>Moodbase</h1>
          <h1>profile logo</h1>
        </div>

      {/* Main Content */}
      <div className="flex flex-col items-center border-dashed border-2 border-gray-300">
        <h1 className="text-blue-600 reddit-sans-semibold text-[32px]">Hello, {firstName}!</h1>
        <h1 className="text-neutral-900 mt-[10px] reddit-sans-semibold text-[52px]">How are you feeling today?</h1>
        <h1 className="text-neutral-600 mt-[10px] reddit-sans-medium text-[18px]">{new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric' 
        })}</h1> 
        <SubmitButton className="bg-blue-600 mt-16 text-[20px] px-[32px] py-[32px] reddit-sans-regular" pendingText="Tracking...">
            Log today's Moods
        </SubmitButton>
      </div>

      {/* Container Section */}
      <div className="flex flex-row gap-8 mt-16 justify-center ">
        <div className="flex flex-col bg-white rounded-xl border-solid mb-[60px] ">
          <AverageWrapper />
        </div>
        

        <div className="flex flex-col rounded-sm bg-white border-solid mb-[60px] min-w-[768px] ">
          <TrendWrapper moodData={moodData || []}/>
        </div>
        
        </div>      
      </div>
  );
}

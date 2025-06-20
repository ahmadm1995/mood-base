

import React, { useEffect, useState } from 'react';
import SleepIcon from "../app/assets/images/icon-sleep.svg?react";
import { sleepDurations, moods } from "../app/assets/helpData";
import { getAverageMoodLabel, getAverageSleepLabel } from "@/app/hooks/lastFiveDays"


console.log('Attempting to import SleepIcon. Value:', SleepIcon);

interface MoodDataObject {
  id: string;
  created_at: string;
  user_id: string;
  mood: number;
  feelings: string[];
  journal_entry: string | null;
  sleep_hours: number | null;
}

interface TrendsProps {
  moodData: MoodDataObject[];
}

interface MoodLabel {
  mood: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface SleepLabel {
  label: string;
  height: string;
}

interface MoodTrendProps {
  mood: MoodDataObject;
}

interface PopOverProps {
  mood: MoodDataObject;
  moodLabel: MoodLabel;
  sleepLabel: SleepLabel;
  icon: React.ComponentType<{ className?: string }>;
}

const Trends: React.FC<TrendsProps> = ({ moodData }) => {
 
  const sorted = [...moodData].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  const lastElevenDays = sorted.slice(-11);
  const sleepLinePositions = [
    { height: '260px', bottom: '52px' },   // 9+ hours line
    { height: '208px', bottom: '104px' },  // 7-8 hours line  
    { height: '156px', bottom: '156px' },  // 5-6 hours line
    { height: '104px', bottom: '208px' },  // 3-4 hours line
    { height: '52px', bottom: '260px' },   // 0-2 hours line
  ]; 

  return (
    <>
      <h3 className="my-8 mx-8 reddit-sans-bold text-[32px]">Mood and sleep trends</h3>
        <div className='flex ml-8 mr-[26px]  h-[312px]'>
          <div className='flex flex-col pr-4 gap-8 h-full items-start justify-start'>
            {sleepDurations.map((sleep) => (
              <div key={sleep.label} className="flex gap-1.5 items-center">
              <img
                src={SleepIcon.src}
                alt="Sleep"
                className="w-3 h-3" // You can still use Tailwind for sizing if needed
              />
              {/* <img src={SleepIcon} alt="Sleep" className="w-5 h-5" /> */}
              <p className="text-[12px] text-neutral-600 reddit-sans-regular ">{sleep.label}</p>
              </div>
            ))}
          </div>
          <div className='flex h-full overflow-x-auto gap-4 flex-1 relative'>
            {sleepLinePositions.map((line, index) => (
            <div
              key={index}
              className="absolute left-0 right-0 mb-10 border-t border-gray-200 border-dashed"
              style={{ bottom: line.bottom }}
            />
          ))}
            {lastElevenDays.map((mood) => (
              <MoodTrend key={mood.id} mood={mood}/>
            ))}
          </div>
        </div>
    </>
  );
}

export default Trends;

export const MoodTrend: React.FC<MoodTrendProps> = ({mood}) => {

  const date = new Date(mood.created_at)
  const day = date.getDate()
  const month = date.toLocaleString("default", { month: "short"})
  const moodLabel = getAverageMoodLabel(mood.mood);
  const sleepLabel = getAverageSleepLabel(mood.sleep_hours);
  const MoodIcon = moodLabel.icon;
  const [popOver, setPopOver] = useState<boolean>(false)


  return (
    <div className='h-full min-w-[40px] flex flex-col items-center gap-3 justify-end relative'>
      {mood.sleep_hours && (
        
        <div className={`${moodLabel.color} w-full rounded-full flex items-start justify-center pt-1.5 cursor-pointer`} 
             onClick={() => console.log('clicked')}
             style={{height: `${sleepLabel.height}`}}>

            <img
                src={MoodIcon.src}
                alt="Mood"
                className="w-8 h-8 " 
              />


            
             
        
        </div>
      )}
      <div className='flex flex-col gap-1.5 items-center'>
              <p className='text-[12px] text-neutral-900 reddit-sans-regular'>{month}</p>
              <p className='text-[13px] text-neutral-900 reddit-sans-semibold'>{day}</p>
            </div>
    </div>
  )


}


'use client';

import Trends from '@/components/Trends';

interface MoodDataObject {
  id: string;
  created_at: string;
  user_id: string;
  mood: number;
  feelings: string[];
  journal_entry: string | null;
  sleep_hours: number | null;
}

interface TrendWrapperProps {
  moodData: MoodDataObject[];
}

export default function TrendWrapper({ moodData }: TrendWrapperProps) {
  return <Trends moodData={moodData} />;
}

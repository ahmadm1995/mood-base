import React from 'react';
import VeryHappyIcon from "/app/assets/images/icon-very-happy-white.svg?react";
import HappyIcon from "/app/assets/images/icon-happy-white.svg?react";
import NeutralIcon from "/app/assets/images/icon-neutral-white.svg?react";
import SadIcon from "/app/assets/images/icon-sad-white.svg?react";
import VerySadIcon from "/app/assets/images/icon-very-sad-white.svg?react";

// Type definitions
interface MoodLabel {
  mood: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SleepLabel {
  label: string;
  height: string;
}

export const getAverageMoodLabel = (value: number | null): MoodLabel => {
  if (value === null || value === undefined) {
    return { mood: "Neutral", color: "bg-blue-300", icon: NeutralIcon };
  }

  if (value <= -1.5) {
    return { mood: "Very Sad", color: "bg-red-300", icon: VerySadIcon };
  } else if (value <= -0.5) {
    return { mood: "Sad", color: "bg-indigo-300", icon: SadIcon };
  } else if (value < 0.5) {
    return { mood: "Neutral", color: "bg-blue-300", icon: NeutralIcon };
  } else if (value < 1.5) {
    return { mood: "Happy", color: "bg-green-300", icon: HappyIcon };
  } else {
    return { mood: "Very Happy", color: "bg-amber-300", icon: VeryHappyIcon };
  }
};

export const getAverageSleepLabel = (value: number | null): SleepLabel => {
  if (value === null || value === undefined) {
    return { label: "No data", height: "52px" };
  }

  if (value <= 2) {
    return { label: "0-2 Hours", height: "52px" };
  } else if (value <= 4) {
    return { label: "3-4 hours", height: "104px" };
  } else if (value <= 6) {
    return { label: "5-6 hours", height: "156px" };
  } else if (value <= 8) {
    return { label: "7-8 hours", height: "208px" };
  } else {
    return { label: "9+ hours", height: "260px" };
  }
};
"use client";

import React from 'react'

function Average() {
  return (
    <div>
        
            <div className="my-6 mx-6">
                <div className="flex flex-row gap-2 items-center">
                <h1 className="text-[24px] text-neutral-900 reddit-sans-semibold">Average Moods</h1>
                <h1 className="text-[15px] text-neutral-600 reddit-sans-regular">(Last 5 Check-ins)</h1>
                </div>
                <div className="bg-blue-100 rounded-xl">
                <div className="mt-3 py-[42px] px-5">
                    <h1 className="text-[20px] text-neutral-900 reddit-sans-semibold">Keep tracking!</h1>
                    <h1 className="text-[15px] text-neutral-900 reddit-sans-light">Log 5 check-ins to see your average mood.</h1>
                </div>
                </div>
            </div>

            <div className="my-6 mx-6">
                <div className="flex flex-row gap-2 items-center">
                <h1 className="text-[24px] text-neutral-900 reddit-sans-semibold">Average Sleep</h1>
                <h1 className="text-[15px] text-neutral-600 reddit-sans-regular">(Last 5 Check-ins)</h1>
                </div>
                <div className="bg-blue-100 rounded-xl">
                    <div className="mt-3 py-[42px] px-5">
                    <h1 className="text-[24px] text-neutral-900 reddit-sans-semibold">Not enough data yet!</h1>
                    <h1 className="text-[15px] text-neutral-900 reddit-sans-light">Track 5 nights to view average sleep.</h1>
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default Average
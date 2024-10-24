'use client'
import React from 'react';

type CloudFillProps = {
  id: string;
  percentage: number; // Integer between 0 and 100
};

const CloudFillHuman: React.FC<CloudFillProps> = ({ id, percentage }) => {
  const clampedPercentage = Math.max(0, Math.min(percentage, 100));
  const offset = 100 - clampedPercentage;

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="200" 
      height="200" 
      strokeWidth={0.5} 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <defs>
        <linearGradient id={`${id}-gradient`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset={`${offset}%`} style={{stopColor: "#ffffff00", stopOpacity: 0}} />
          <stop offset={`${offset}%`} style={{stopColor: "#5cc6fe", stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path 
        fill={`url(#${id}-gradient)`} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M 2.25 15a4.5 4.5 0 0 0 4.5 4.5
            H 18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33
            A 4.502 4.502 0 0 0 2.25 15Z"/>
    </svg>
  )
};

export default CloudFillHuman;

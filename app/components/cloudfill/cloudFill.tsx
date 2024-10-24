'use client'
import React from 'react';

type CloudWithFillProps = {
  percentage: number; // Integer between 0 and 100
};

const CloudFill: React.FC<CloudWithFillProps> = ({ percentage }) => {
  // Ensure percentage is within 0 to 100
  const clampedPercentage = Math.max(0, Math.min(percentage, 100));
  const yPosition = (24 * (100 - clampedPercentage)) / 100; // Calculate Y position based on percentage

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={0.5}
      stroke="currentColor"
      width={200}
      height={200}
    >
      <defs>
        <clipPath id="clip-id">
          {/* Rectangle that determines the filled area based on the percentage */}
          <rect x="0" y={yPosition} width="24" height={24 - yPosition} />
        </clipPath>
      </defs>

      {/* Filled cloud shape clipped to the percentage */}
      <path
        fill="#5cc6fe"
        d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75
           3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848
           5.25 5.25 0 0 0-10.233
           2.33A4.502 4.502 0 0 0 2.25 15Z"
        clipPath="url(#clip-id)"
      />

      {/* Cloud outline */}
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75
           3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848
           5.25 5.25 0 0 0-10.233
           2.33A4.502 4.502 0 0 0 2.25 15Z"
      />
    </svg>
  );
};

export default CloudFill;
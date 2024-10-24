'use client'

import { useState } from 'react'
import CloudFillHuman from './cloudFillHuman'
import CloudFill from './cloudFill'


export default function CloudLoader({ compare = false, id }: { compare: boolean, id: string }) {
    const [percentage, setPercentage] = useState(50);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPercentage(parseInt(event.target.value));
    }

    const maxWidth = compare ? 'max-w-[600px]' : 'max-w-[400px]';

    return (
        <div className={`flex items-center justify-center justify-between ${maxWidth} mx-auto`}>
            <div className="flex flex-col items-center">
                <div className="text-sm dark:text-gray-300 mx-auto mb-4">{percentage}%</div>
                <input type="range" min="0" max="100" value={percentage} id="slider" onInput={handleInput} />
            </div>

              <div className="flex flex-col items-center">
                <CloudFillHuman percentage={percentage} id={id} />
                <span className="relative bottom-[20px]">My Solution</span>
              </div>
              
              {compare && (
                    <div className="flex flex-col items-center">
                        <CloudFill percentage={percentage} />
                        <span className="relative bottom-[20px]">GPT-o1</span>
                    </div>
                )
              }
        </div>
    )
}

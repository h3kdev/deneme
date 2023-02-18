import { React, useState, useEffect } from 'react';
import './index.css';

export default function Loading() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
      let interval = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 100);
  
      if (progress === 100) {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [progress]);
  
    return (
        <div className='w-full h-screen bg-main'>
            {progress < 100 && (
            <div className='flex items-center justify-center pt-[500px]'>
                <div class="w-96 bg-label rounded-full h-2.5">
                    <div class="bg-purple h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
            )}
            {progress === 100 && (
                <div className='text-white'>sa</div>
            )}
        </div>
    );
  }
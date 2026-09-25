import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto flex gap-7 mt-12 bg-[#15171D] p-5'>
            <div className='flex flex-col gap-2.5'>
                <p className='text-[#C2F800]'>WORKOUT LIBRARY</p>
                <h1 className='font-bold text-white text-6xl'>TRAIN WITH INTENT. <br /> LOG EVERY SET.</h1>
                <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                    into today&apos;s plan, and watch the week&apos;s work add up.</p>
                    <button className='bg-[#C2F800] p-1 rounded-xl max-w-75 cursor-pointer'>BROWSE WORKOUTS</button>
            </div>
            <div>
                <Image
                src='/assets/banner.png'
                alt='bannerlogo'
                width={300}
                height={300}
                />
            </div>
        </div>
    );
};

export default Banner;
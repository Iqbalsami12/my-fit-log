'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const NavButtons = () => {
     const [navButtons, setNavbuttons] = useState("Workouts")

    const handleNavButtons= (type: "Workouts" | "My Plan") => {
        setNavbuttons(type)
    }
    return (
        <div className='md:flex gap-2.5 lg:flex'>
            <li><Link href='/workouts' >
        
        
        <button onClick={() => handleNavButtons("Workouts")}
                type="submit" className={`${navButtons=== "Workouts" ? 'btn bg-[#1A2312] text-[#C2F800]' : ""}  rounded-2xl btn`}> Workouts</button>
            
        
        </Link>
        </li>

        <li>
            <Link href='/myPlan'>
            <button onClick={() => handleNavButtons("My Plan")}
                type="submit" className={`${navButtons=== "My Plan" ? 'btn bg-[#1A2312] text-[#C2F800]' : ""} border-0  rounded-2xl btn`}> My Plan</button>
            
            </Link>
            </li>
        </div>
    );
};

export default NavButtons;
'use client'

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const DoneButton = () => {

    const [markDone, setMarkDone] = useState(false)

    const handleMarkDone = () =>{
        setMarkDone(true)
    }

    return (
        <div>
            <button onClick={()=>handleMarkDone()}
            disabled={markDone}
            className={`${markDone?"bg-gray-400 text-black rounded-3xl p-2.5":"bg-[#CCFF00] text-black rounded-3xl p-2.5"}`}
            >
            {markDone ?( <>
            <FontAwesomeIcon icon={faCheck}/>
            <span>Done</span>
            </>) :(
                <>
                <FontAwesomeIcon icon={faCheck}/>
                <span>Mark as Done</span>
                </>
            )
            }

            </button>
        </div>
    );
};

export default DoneButton;
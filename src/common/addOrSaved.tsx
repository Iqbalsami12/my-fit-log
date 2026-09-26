'use client'

import { faBookmark, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';


const AddOrSaved = () => {

    const [addedOrSaved, setAddedOrSaved] = useState("Add to today's plan")

    const handleAddedorSaved = (type: "Add to today's plan" | "Save for later") => {
        setAddedOrSaved(type)
    }
    return (
        <div className='flex gap-2.5'>
            <button onClick={() => handleAddedorSaved("Add to today's plan")}
                type="submit" className={`${addedOrSaved === "Add to today's plan" ? 'btn bg-[#C2F800] text-black' : ""} btn rounded-2xl`}><FontAwesomeIcon icon={faCalendar} /> Add to today&apos;s plan</button>


            <button onClick={() => handleAddedorSaved("Save for later")}
                type="submit" className={`${addedOrSaved === "Save for later" ? 'btn bg-[#C2F800] text-black' : ""} rounded-2xl`}><FontAwesomeIcon icon={faBookmark} /> Save for later</button>
        </div>
    );
};

export default AddOrSaved;
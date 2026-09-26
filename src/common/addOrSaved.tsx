'use client'

import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkout } from '@/workoutTypes';
import { faBookmark, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';


const AddOrSaved = ({workout}: {workout:IWorkout}) => {

    const {plannedWorkouts, 
        setPlannedWorkouts,
        savedWorkouts,
         setSavedWorkouts

    } = useContext(WorkoutContext) as {
        plannedWorkouts: IWorkout[];
        setPlannedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
        savedWorkouts: IWorkout[];
        setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    }

    const [addedOrSaved, setAddedOrSaved] = useState("Add to today's plan")

    const handleAddedorSaved = (type: "Add to today's plan" | "Save for later") => {
        setAddedOrSaved(type)
    }

    const handlePlannedWorkout =()=>{
        setPlannedWorkouts([...plannedWorkouts, workout])
        toast.success(`${workout.name} has been added to today's plan` )
    }

    const handleSavedWorkout = () => {
        setSavedWorkouts([...savedWorkouts, workout])
        toast.success(`${workout.name} has been saved for later`)
    }

    return (
        <div className='flex gap-2.5'>
            <button onClick={() => {handleAddedorSaved("Add to today's plan"); handlePlannedWorkout()}}
                type="submit" className={`${addedOrSaved === "Add to today's plan" ? 'btn bg-[#C2F800] text-black' : ""} btn rounded-2xl`}><FontAwesomeIcon icon={faCalendar} /> Add to today&apos;s plan</button>


            <button onClick={() => {handleAddedorSaved("Save for later"); handleSavedWorkout()}}
                type="submit" className={`${addedOrSaved === "Save for later" ? 'btn bg-[#C2F800] text-black' : ""} rounded-2xl`}><FontAwesomeIcon icon={faBookmark} /> Save for later</button>
        </div>
    );
};

export default AddOrSaved;
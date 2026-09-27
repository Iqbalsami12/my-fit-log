'use client'

import React, { createContext, ReactNode, useState } from 'react';

export const WorkoutContext = createContext({})

const WorkoutProvider = ({children}:{children:ReactNode}) => {

    const [plannedWorkouts, setPlannedWorkouts] = useState([])

    const [savedWorkouts, setSavedWorkouts] = useState([])
    const [tabActive, setTabActive] = useState<'plan' | 'saved'>('plan')
    

    const sharedData = {
        plannedWorkouts,
        setPlannedWorkouts,
        savedWorkouts,
        setSavedWorkouts,
        tabActive,
        setTabActive,
    }

    
    return (
        <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
        
    );
};

export default WorkoutProvider;
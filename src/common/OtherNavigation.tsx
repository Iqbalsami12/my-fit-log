'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkout } from '@/workoutTypes';
import React, { useContext } from 'react';



const OtherNavigation = () => {
  const { plannedWorkouts, savedWorkouts, tabActive, setTabActive } = useContext(WorkoutContext) as {
    plannedWorkouts: IWorkout[];
    savedWorkouts: IWorkout[];
    tabActive: 'plan' | 'saved';
    setTabActive: React.Dispatch<React.SetStateAction<'plan' | 'saved'>>;
  };

 

  return (
    <div className="navbar-end">
      <button
        type="button"
        onClick={() => setTabActive('plan')}
        className={tabActive === 'plan' ? 'btn' : ''}
      >
        Plan({plannedWorkouts.length})
      </button>

      <button
        type="button"
        onClick={() => setTabActive('saved')}
        className={tabActive === 'saved' ? 'btn' : ''}
      >
        Saved({savedWorkouts.length})
      </button>
    </div>
  );
};

export default OtherNavigation;
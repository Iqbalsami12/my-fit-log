'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkout } from '@/workoutTypes';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import ListCards from './ListCards';

const PlannedPage = () => {

    const[sortBy, setSortBy] = useState<`Duration`| `Calories` | `Rating`>(`Duration`)

    const { plannedWorkouts, setPlannedWorkouts, savedWorkouts, setSavedWorkouts } = useContext(WorkoutContext) as {
        plannedWorkouts: IWorkout[];
        setPlannedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
        savedWorkouts: IWorkout[];
        setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    }

    const handleRemovePlan = (id: number) => {
        setPlannedWorkouts(
            plannedWorkouts.filter((workout) => workout.id !== id)
        )
    }
    const handleRemoveSaved = (id: number) => {
        setSavedWorkouts(
            savedWorkouts.filter((workout) => workout.id !== id)
        )
    }

    const sortWorkouts = (workout: IWorkout[]) => {
        const sortedWorkouts = [...workout];
        if (sortBy === 'Duration') {
            sortedWorkouts.sort((a, b) => b.duration - a.duration);
        } else if (sortBy === 'Calories') {
            sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        } else if (sortBy === 'Rating') {
            sortedWorkouts.sort((a, b) => b.rating - a.rating);
        }
        return sortedWorkouts;
    };

    const sortPlannedWorkouts = sortWorkouts(plannedWorkouts);
    const sortSavedWorkouts = sortWorkouts(savedWorkouts);

    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-3xl'>MY PLAN</h2>
            <p className='text-gray-400'>Cap of five lifts for today. Finish them, then load more</p>

            <table className='bg-[#232834] rounded-2xl w-full'>
                <tbody>
                    <tr>
                        <td className='p-10' >Exercises</td>
                        <td className='p-10'>Minutes</td>
                        <td className='p-10'>Calories</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                </tbody>
            </table>
            <div className='container mx-auto flex justify-between mt-12'>

                <div className="tabs tabs-border">
                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Today's Plan" />
                    <div className="tab-content border-base-300 bg-base-100 p-10">
                        {
                            plannedWorkouts.length > 0 ?
                                (sortPlannedWorkouts.map((workout: IWorkout) =>
                                (<ListCards
                                    key={workout.id}
                                    exercise={workout} showDoneButton={true}
                                    onRemove={() => handleRemovePlan(workout.id)} />)
                                )) :
                                (
                                    <div className='flex flex-col items-center justify-center gap-3'>
                                        <p className='font-bold text-2xl'>NOTHING HERE YET</p>
                                        <p className="text-gray-400">Browse the library and add a lift to get today moving </p>
                                        <Link href='/workouts' className='font-bold text-black bg-[#CCFF00] rounded-3xl p-2.5 max'>Go to workouts</Link>
                                    </div>
                                )
                        }
                    </div>

                    {/* Saved tab */}

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Saved" defaultChecked />
                    <div className="tab-content border-base-300 bg-base-100 p-10"> {
                        savedWorkouts.length > 0 ?
                            (sortSavedWorkouts.map((workout: IWorkout) =>
                            (<ListCards key={workout.id} exercise={workout} showDoneButton={false}
                                onRemove={() => handleRemoveSaved(workout.id)} />)
                            )) :
                            (
                                <div className='flex flex-col items-center justify-center gap-3'>
                                    <p className='font-bold text-2xl'>NOTHING HERE YET</p>
                                    <p className="text-gray-400">Browse the library and add a lift to get today moving </p>
                                    <Link href='/workouts' className='font-bold text-black bg-[#CCFF00] rounded-3xl p-2.5 max'>Go to workouts</Link>
                                </div>
                            )
                    }
                    </div>


                </div>

                <select value={sortBy}
                onChange={(e) => setSortBy(e.target.value as `Duration` | `Calories` | `Rating`)}
                defaultValue="Pick a color" className="select">
                    <option value="" disabled>Sort By</option>
                    <option>Duration</option>
                    <option>Calories</option>
                    <option>Rating</option>
                </select>
            </div>

        </div>
    );
};

export default PlannedPage;
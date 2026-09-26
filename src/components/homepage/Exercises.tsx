import React from 'react';
import ExerciseCard from '../ExerciseCard';
import { IWorkout } from '@/workoutTypes';


const getExercises = async()=>{
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');

     if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json()
    return data;
}

const Exercises = async() => {

    const exercises = await getExercises()
    
    return (
        
        <div className='mt-10 container mx-auto'>
            <div>
                <h2 className='font-bold text-white text-3xl'>THE LIBRARY</h2>
            <p>Twelve lifts covering every major muscle group</p>
            </div>

            <div className='container mx-auto grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3'>
                {
                    exercises.map((exercise:IWorkout) =><ExerciseCard key={exercise.id} exercise = {exercise}></ExerciseCard>)
                }
            </div>
        </div>
    );
};

export default Exercises;
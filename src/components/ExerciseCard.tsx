import { IWorkout } from '@/workoutTypes';
import { faBurn, faClock, faStar,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IWorkoutCardProps{
  exercise: IWorkout
}

const ExerciseCard = ({exercise}:IWorkoutCardProps) => {
    // const{id, name, image, muscleGroups, duration, caloriesBurned, rating  } = exercise
    return (
      <Link href= {`/workouts/${exercise.id}`}>
            <div className="card bg-base-100 w-96 shadow-sm overflow-hidden mb-6 rounded-2xl">
    <Image className='w-full'
    src= {exercise.image}
    alt={exercise. name}
    width={200}
    height={200}
    
    />
  <div className="card-body bg-[#15171D]">
    <div className="card-actions">
      <div className=" flex gap-1.5 ">
        
        {exercise.muscleGroups.map((muscle) =>(
          <span key={muscle} className='badge badge-outline font-bold text-black bg-[#C2F800]'
          >
            {muscle}
          </span>
        ))} </div>
      
    </div>
    <h2 className="card-title">
      {exercise.name.toUpperCase()}
    </h2>
    <p>{exercise.equipment}</p>
   
   <hr />
   <ul className='flex gap-1.5'>
    <li><FontAwesomeIcon icon={faClock} /> Duration</li>
    <li><FontAwesomeIcon icon={faBurn} />{exercise.caloriesBurned} kcal</li>
    <li><FontAwesomeIcon icon={faStar} />{exercise.rating}</li>
   </ul>
      
    
  </div>
</div>
      </Link>
    );
};

export default ExerciseCard;
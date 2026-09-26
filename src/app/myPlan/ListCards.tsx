import { IWorkout } from '@/workoutTypes';
import { faBurn, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ListCardProps{
    exercise: IWorkout
}

const ListCards = ({exercise}:ListCardProps) => {
    return (
        <div className='container mx-auto flex justify-between'>
          <div className='flex gap-2.5'>
              <Image
            src={exercise.image}
            alt={exercise.name}
            width={100}
            height={70}
            />
           <div>
             <h2 className='font-bold text-2xl'> {exercise.name} </h2>

            <ul className='flex flex-col gap-1.5'>
    <li><FontAwesomeIcon icon={faClock} /> Duration</li>
    <li><FontAwesomeIcon icon={faBurn} />{exercise.caloriesBurned} kcal</li>
    <li><FontAwesomeIcon icon={faStar} />{exercise.rating}</li>
   </ul>
           </div>

          </div>
          <div>
            <Link href={`http://localhost:3000/workouts/3`} className='rounded-3xl bg-[#CCFF00] p-2.5 font-bold text-black'>View Details</Link>
            
          </div>
        </div>
    );
};

export default ListCards;
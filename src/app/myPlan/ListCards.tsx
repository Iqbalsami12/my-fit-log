import DoneButton from '@/common/DoneButton';
import RemoveButtons from '@/components/RemoveButtons';
import { IWorkout } from '@/workoutTypes';
import { faBurn, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ListCardProps{
    exercise: IWorkout
    showDoneButton?: boolean
    onRemove: ()=> void
}

const ListCards = ({exercise, showDoneButton,onRemove}:ListCardProps) => {
    return (
        <div className='container mx-auto flex justify-between'>
          <div className='flex gap-2.5'>
              <Image className='rounded-2xl'
            src={exercise.image}
            alt={exercise.name}
            width={150}
            height={70}
            />
           <div className='grid grid-cols-1 gap-2'>
             <h2 className='font-bold text-2xl'> {exercise.name} </h2>
             <h2 className="text-gray-400">{exercise.equipment}</h2>

            <ul className='flex gap-1.5'>
    <li><FontAwesomeIcon icon={faClock} /> {exercise.duration}</li>
    <li><FontAwesomeIcon icon={faBurn} />{exercise.caloriesBurned} kcal</li>
    <li><FontAwesomeIcon icon={faStar} />{exercise.rating}</li>
   </ul>
           </div>

          </div>
          <div className='flex gap-2.5 justify-center items-center'>
            <button>
                <Link href={`http://localhost:3000/workouts/${exercise.id}`} className='rounded-3xl  p-2.5 bg-[#374151]'>View Details</Link>
            </button>

            {showDoneButton && <DoneButton/>}
            <RemoveButtons onRemove={onRemove}/>



            
          </div>
        </div>
    );
};

export default ListCards;
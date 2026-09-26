import AddOrSaved from '@/common/addOrSaved';
import { IWorkout } from '@/workoutTypes';
import Image from 'next/image';

interface IWorkoutDetailsProps{
    params: Promise<
    {
        id: string
    }
    
    >
}


const getExercises = async()=>{
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog')

    const data =  response.json()
    return data
}



const WorkoutDetailsPage = async({params}: IWorkoutDetailsProps) => {


    const {id} = await params;
    const workoutData = await getExercises();
    const workout = workoutData.find((workout:IWorkout)=> workout.id === Number(id))
    
    return (
        <div className='container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
            <div>

                <Image
                className='rounded-2xl'
                src={workout.image}
                alt={workout.name}
                width={550}
                height={770}
                />
            </div>
            {/* ------------------------- */}
            <div className='flex flex-col gap-5'>
                <h2 className='font-bold text-white text-4xl'>{workout.name.toUpperCase()}</h2>
                <p className='text-gray-400'>{workout.description}</p>
                <p>
                    {
                    workout.muscleGroups.map((muscle:string) =>(
          <span key={muscle} className='badge badge-outline font-bold text-black bg-[#C2F800]'
          >
            {muscle}
          </span>))}
                </p>

            <table className='w-full rounded-xl overflow-hidden bg-[#151922] '>
              <tbody className='divide-y divide-gray-700'>
                 <tr className='flex justify-between  py-3 px-3'>
                <td className='text-gray-400'>EQUIPMENT</td>
                <td className='text-gray-400'>{workout.equipment}</td>
               </tr>
               <tr className='flex justify-between  py-3 px-3'>
                <td className='text-gray-400'>DIFFICULTY</td>
                <td className='text-gray-400'>{workout.difficulty}</td>
               </tr>
               <tr className='flex justify-between  py-3 px-3'>
                <td className='text-gray-400'>SETS</td>
                <td className='text-gray-400'>{workout.sets}</td>
               </tr>
               <tr className='flex justify-between  py-3 px-3'>
                <td className='text-gray-400'>REPS</td>
                <td className='text-gray-400'>{workout.reps}</td>
               </tr>
               <tr className='flex justify-between  py-3 px-3'>
                <td className='text-gray-400'>DURATION</td>
                <td className='text-gray-400'>{workout.duration}</td>
               </tr>
               <tr className='flex justify-between  py-3 px-3'>
                <td className='text-gray-400'>CALORIES</td>
                <td className='text-gray-400'>{workout.caloriesBurned}</td>
               </tr>
               <tr className='flex justify-between  py-3 px-3'>
                <td className='text-gray-400'>RATING</td>
                <td className='text-gray-400'>{workout.rating}</td>
               </tr>
              </tbody>
            </table>

            <p className='font-bold text-3xl mt-7'>INSTRUCTIONS</p>
            <ol className='list-decimal space-x-1.5'>
                {workout.instructions.map((instruction:string)=>(

                    <li key={instruction}>
                        {instruction}
                    </li>
                )
                )}
            </ol>
                <AddOrSaved workout={workout}></AddOrSaved>
           
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;
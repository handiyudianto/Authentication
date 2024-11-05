import { verifyAuth } from '@/lib/auth';
import { getTrainings } from '@/lib/trainings';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function TrainingPage() {
  const result = await verifyAuth()
  if (!result.user) {
    redirect('/')
  }
  const trainingSessions = getTrainings();

  return (
    <main>
      <h1 className='pb-8 text-3xl flex justify-center '>Find your favorite activity</h1>
      <div className='flex justify-center'>
        <ul className='grid max-w-[1140px] min-w-[350px] m-[2rem]  gap-4 grid-cols-3 '>
          {trainingSessions.map((training) => (
            <li key={training.id} className='gap-2 pb-2 rounded-xl overflow-hidden cursor-pointer hover:size-[101%] bg-slate-500 hover:bg-slate-700'>
              <Image width={450} height={450} src={`/trainings/${training.image}`} alt={training.title} />
              <div className=' bg-opacity-50 h-full p-2'>
                <h2>{training.title}</h2>
                <p>{training.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

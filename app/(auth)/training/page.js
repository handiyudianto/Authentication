import { verifyAuth } from '@/lib/auth';
import { getTrainings } from '@/lib/trainings';
import { redirect } from 'next/navigation';

export default async function TrainingPage() {
  const result = await verifyAuth()
  if (!result.user) {
    redirect('/')
  }
  const trainingSessions = getTrainings();

  return (
    <main>
      <h1>Find your favorite activity</h1>
      <ul className='columns-3'>
        {trainingSessions.map((training) => (
          <li key={training.id}>
            <img src={`/trainings/${training.image}`} alt={training.title} />
            <div>
              <h2>{training.title}</h2>
              <p>{training.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

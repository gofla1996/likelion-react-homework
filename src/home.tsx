import { Link } from 'react-router-dom';
import { tm } from '@/utils/tw-merge';

export default function Home() {
  return (
    <div
      className={tm(
        'flex flex-col items-center  gap-3',
        'my-50 mx-auto py-10 w-100',
        'rounded-3xl shadow-lg',
        'bg-indigo-300'
      )}
    >
      <h1 className="text-2xl font-bold text-gray-800">리액트 과제</h1>
      <Link to="/homework5" className="hover:text-indigo-200">
        과제 5로 이동
      </Link>
      <Link to="/homework6" className="hover:text-indigo-200">
        과제 6로 이동
      </Link>
    </div>
  );
}

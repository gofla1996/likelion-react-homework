import { Link } from 'react-router-dom';
import { tm } from '@/utils/tw-merge';

export default function Home() {
  return (
    <div
      className={tm(
        'flex flex-col items-center  gap-10',
        'my-50 mx-auto py-10 px-10 w-fit',
        'rounded-3xl shadow-lg',
        'bg-indigo-300'
      )}
    >
      <h1 className="text-2xl font-bold text-gray-800">
        리액트 과제 by Hyerim
      </h1>
      <div>
        <ul className="flex flex-col gap-3">
          <li>
            <Link to="/homework5" className="hover:text-indigo-200">
              5주차 과제 : 쇼핑 카트 구현
            </Link>
          </li>
          <li>
            <Link to="/homework6" className="hover:text-indigo-200">
              6주차 과제 : 카드 검색 리스트 구현 - 밀리의 서재
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

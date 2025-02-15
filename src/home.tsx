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
          <li className="flex gap-3">
            <Link to="/homework5" className=" hover:text-indigo-500">
              5주차 과제 : 쇼핑 카트 구현
            </Link>
            <a
              href="https://gofla1996.github.io/likelion-react-homework/read-me/w5"
              className="hover:text-indigo-200 text-sm"
            >
              README
            </a>
          </li>
          <li className="flex gap-3">
            <Link to="/homework6" className="hover:text-indigo-500">
              6주차 과제 : 카드 검색 리스트 구현 - 밀리의 서재
            </Link>
            <a
              href="https://gofla1996.github.io/likelion-react-homework/read-me/w6"
              className="hover:text-indigo-200 text-sm"
            >
              README
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

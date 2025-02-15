import { Link } from 'react-router-dom';
import Millie from './millie/millie';

function Homework6() {
  return (
    <section className="Homework5 bg-euid-gray-200 flex flex-col gap-10">
      <Link
        to="/"
        className="p-1 font-bold bg-gray-400 rounded-lg hover:bg-gray-500 w-fit"
      >
        <button type="button" className="cursor-pointer">
          Go Home
        </button>
      </Link>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-black">
          카드 검색 리스트 과제(밀리의 서재)
        </h1>
        <Millie />
      </div>
    </section>
  );
}

export default Homework6;

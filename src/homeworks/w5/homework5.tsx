import { Link } from 'react-router-dom';
import Cart from './cart/cart';
function Homework5() {
  return (
    <section className="Homework5 bg-euid-gray-200 wrapper flex flex-col gap-10">
      <Link
        to="/"
        className="p-1 font-bold bg-gray-400 rounded-lg hover:bg-gray-500 w-fit"
      >
        <button type="button" className="cursor-pointer">
          Go Home
        </button>
      </Link>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-black">쇼핑 카트 과제</h1>
        <Cart />
      </div>
    </section>
  );
}

export default Homework5;

import CartHeader from './header';
import ItemList from './item-list';
import Footer from './footer';
import { tm } from '@/utils/tw-merge';

function Cart() {
  return (
    <div
      className={tm(
        'Cart',
        'bg-gray-200',
        'flex flex-col gap-3',
        'border-3 rounded-lg',
        'min-w-xs',
        'p-5'
      )}
      lang="ko"
    >
      <CartHeader />
      <hr />
      <ItemList />
      <hr />
      <Footer />
    </div>
  );
}

export default Cart;

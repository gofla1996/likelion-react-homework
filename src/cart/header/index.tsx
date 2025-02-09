import { CartIcon } from './cart-icon';
import { tm } from '@/utils/tw-merge';

function CartHeader() {
  return (
    <div
      className={tm('flex flex-row justify-start items-center gap-2')}
      lang="ko"
    >
      <CartIcon />
      <h1 className={tm('m-0', 'font-bold text-xl', 'fill-gray-700')}>
        장바구니
      </h1>
    </div>
  );
}

export default CartHeader;

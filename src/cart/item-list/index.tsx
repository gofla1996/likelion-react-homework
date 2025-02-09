import items from '@/data/items';
import Count from './count';
import { tm } from '@/utils/tw-merge';

function ItemList() {
  return (
    <>
      <ul className={tm('flex flex-col gap-4', 'my-2 mx-1')}>
        {items.map((item) => (
          <li
            key={item.id}
            className={tm('flex flex-row justify-between items-center gap-3')}
          >
            <div
              className={tm('flex flex-row justify-start items-center gap-3')}
            >
              <img
                src={item.img}
                className={tm('rounded-full', 'size-14')}
                alt={item.name}
              />
              <div className={tm('Item-info', 'flex flex-col')}>
                <p className={tm('')}>{item.name}</p>
                <p className={tm('text-sm line-clamp-1 font-bold')}>
                  {new Intl.NumberFormat().format(item.price)}원
                </p>
                <p className="sr-only">재고: {item.stock}개</p>
              </div>
            </div>
            <Count min={1} max={item.stock} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ItemList;

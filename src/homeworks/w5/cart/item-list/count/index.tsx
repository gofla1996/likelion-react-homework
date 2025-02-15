import { tm } from '@/utils/tw-merge';
import { useState } from 'react';

interface CountProps {
  count?: number;
  min?: number;
  max: number;
}

function Count({ count: initialCount = 1, min = 1, max }: CountProps) {
  const [count, setCount] = useState(initialCount);

  const handleIncrease = () => {
    const nextCount = count + 1;
    if (nextCount > max) {
      alert('재고 최대 수량을 초과하였습니다.');
      return;
    }
    setCount(nextCount);
  };

  const handleDecrease = () => {
    const nextCount = count - 1;
    if (nextCount < min) {
      alert('최소 수량은 1개입니다.');
      return;
    }
    setCount(nextCount);
  };

  return (
    <div
      className={tm(
        'flex flex-row gap-2',
        'mx-2 px-2 py-0.5',
        'bg-gray-300',
        'border-1 border-gray-500 rounded-full',
        'text-gray-800 text-sm'
      )}
    >
      <h1 className="sr-only" lang="ko">
        주문 수량
      </h1>
      <button type="button" onClick={handleDecrease}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

export default Count;

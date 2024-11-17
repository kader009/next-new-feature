'use client';

import { decrement, increment, incrementBy5 } from '@/redux/feature/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';

const CounterPage = () => {
  const dispatch = useAppDispatch();
  const counts = useAppSelector((state: RootState) => state.counter.count);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <br />
        <h1>{counts}</h1>
        <div className="space-x-3">
          <button
            onClick={() => dispatch(increment())}
            className="bg-black text-white p-2 rounded"
          >
            increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-black text-white p-2 rounded"
          >
            decrement
          </button>
          <button
            onClick={() => dispatch(incrementBy5(5))}
            className="bg-black text-white p-2 rounded"
          >
            incremenBy5
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;

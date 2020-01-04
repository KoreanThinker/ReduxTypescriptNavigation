import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/Counter';
import { useCallback } from 'react';

export default function useCounter() {
    const count = useSelector((state: RootState) => state.Counter.count);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    const onIncreaseBy = useCallback((diff: number) => dispatch(increaseBy(diff)), [dispatch]);

    return {
        count,
        onIncrease,
        onDecrease,
        onIncreaseBy
    };
}

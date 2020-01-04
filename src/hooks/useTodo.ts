import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { remove, setline, append } from '../modules/Todo';

export default function useTodo() {
    const list = useSelector((state: RootState) => state.Todo);
    const dispatch = useDispatch();

    const onRemove = useCallback((id: number) => dispatch(remove(id)), [dispatch]);
    const onSetline = useCallback((id: number) => dispatch(setline(id)), [dispatch]);
    const onAppend = useCallback((text: string) => dispatch(append(text)), [dispatch]);

    return {
        list,
        onRemove,
        onSetline,
        onAppend
    };
}

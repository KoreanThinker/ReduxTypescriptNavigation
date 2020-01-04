import { combineReducers } from 'redux';
import Counter from './Counter';
import Todo from './Todo';

const rootReducer = combineReducers({
    Counter,
    Todo
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

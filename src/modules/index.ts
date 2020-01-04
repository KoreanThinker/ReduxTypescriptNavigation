import { combineReducers } from 'redux';
import HomeScreen from './HomeScreen';

const rootReducer = combineReducers({
    HomeScreen
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

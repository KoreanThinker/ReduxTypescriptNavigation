import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Counter from './Counter';
import Todo from './Todo';

export type RootState = ReturnType<typeof rootReducer>;


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    Counter: persistReducer(persistConfig, Counter),
    Todo: persistReducer(persistConfig, Todo)
})


export default function configureStore() {
    const store = createStore(rootReducer);
    const persistor = persistStore(store);
    return { store, persistor };
};
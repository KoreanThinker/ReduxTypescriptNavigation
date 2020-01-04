import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/modules';
import AppStack from './src/screens';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Main from './pages/Main';

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;

import './index.css';

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Minesweeper } from './components';
import { rootReducer } from './reducers';

const store = createStore(rootReducer);

render(
  <Provider store={store} >
    <Minesweeper />
  </Provider>,
  document.getElementById("root"),
);

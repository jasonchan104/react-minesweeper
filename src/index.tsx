import './index.css';

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { Minesweeper } from './components';
import { rootReducer } from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store} >
    <Minesweeper />
  </Provider>,
  document.getElementById("root"),
);

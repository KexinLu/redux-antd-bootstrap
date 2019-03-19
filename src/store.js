import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from 'sagas/rootSaga';
import rootReducer from 'reducers/rootReducer';

export const history = createBrowserHistory();
const sagaMiddleWare = createSagaMiddleware();
const middleware = composeWithDevTools(applyMiddleware(sagaMiddleWare));

const store = {
  ...createStore(
    rootReducer(history),
    middleware
  ),
  runSaga: sagaMiddleWare.run,
};

store.runSaga(rootSaga);

export default store;

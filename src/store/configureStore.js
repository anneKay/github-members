import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import createRootReducer from '../reducers';


const configureStore = () => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(),
    {},
    composeEnhancer(
      applyMiddleware(
        ReduxThunk
      ),
    ),
  );
  return store;
};

export default configureStore;

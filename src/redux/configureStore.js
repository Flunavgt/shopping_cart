import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import modelReducer from './models/models';
import detailReducer from './models/model_details';
import { operations } from './operations/operations';
import userReducer from './models/login';

const middleware = applyMiddleware(thunk, logger);

const store = configureStore({
  reducer: {
    models: modelReducer,
    details: detailReducer,
    operations,
    current_user: userReducer,
  },
}, middleware);

export default store;

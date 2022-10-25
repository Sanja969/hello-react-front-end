import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messages';

const reducer = {
  message: messagesReducer,
};

const store = configureStore({
  reducer,
});

export default store;

import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import seedReducer from './seed-reducer';

export const rootReducer = combineReducers({
  users: userReducer,
  seed: seedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

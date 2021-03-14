import { Action } from 'redux';
import { GET_USERS, SET_USERS_ERROR, SET_USERS_FETCHING } from '../../constants/action-types';

interface ActionWithPayload<T> extends Action {
  payload: T;
}

export const setUsersLoading = (): Action => ({
  type: SET_USERS_FETCHING,
});

export const setUsersError = (): Action => ({
  type: SET_USERS_ERROR,
});

export const getUsersAction = (seed: string, page = 1, next = false): ActionWithPayload<IUserActionPayload> => ({
  type: GET_USERS,
  payload: {
    params: {
      seed,
      page,
    },
    next,
  },
});

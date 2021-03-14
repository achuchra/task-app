import { all, call, put, fork, takeLatest, AllEffect, ForkEffect } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { Action } from 'redux';
import http from '../../services/http-client';
import { GET_USERS, GET_USERS_ASYNC, SET_USERS_ERROR, SET_USERS_FETCHING } from '../../constants/action-types';

interface ActionWithPayload<T> extends Action {
  payload: T;
}

function* getUsersAsync(action: ActionWithPayload<IUserActionPayload>) {
  const params = {
    ...action.payload.params,
    page: action.payload.params.page.toString(),
  };
  const endpoint = new URLSearchParams(params).toString();
  yield put({ type: SET_USERS_FETCHING });
  try {
    const users: AxiosResponse<IGetUsersResponse> = yield call(http.getUsers, endpoint);
    yield put({ type: GET_USERS_ASYNC, payload: users.data });
  } catch (e: unknown) {
    yield put({ type: SET_USERS_ERROR });
  }
}

function* watchGetUsers() {
  yield takeLatest(GET_USERS, getUsersAsync);
}

function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  yield all([fork(watchGetUsers)]);
}

export default rootSaga;

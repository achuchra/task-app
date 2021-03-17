import { all, call, put, fork, takeLatest, AllEffect, ForkEffect } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import http from '../../services/http-client';
import {
  GET_USERS,
  GET_USERS_ASYNC,
  GET_NEXT_USERS_ASYNC,
  SET_USERS_ERROR,
  SET_USERS_FETCHING,
} from '../../constants/action-types';
import { ActionWithPayload } from '../action-with-payload.interface';

function* getUsersAsync(action: ActionWithPayload<IUserActionPayload>) {
  const {
    payload: { params, next },
  } = action;
  const queryParams = {
    ...params,
    page: params.page.toString(),
  };
  const endpoint = new URLSearchParams(queryParams).toString();
  if (!next) {
    yield put({ type: SET_USERS_FETCHING });
  }
  try {
    const users: AxiosResponse<IGetUsersResponse> = yield call(http.getUsers, endpoint);
    if (next) {
      yield put({ type: GET_NEXT_USERS_ASYNC, payload: users.data });
    } else {
      yield put({ type: GET_USERS_ASYNC, payload: users.data });
    }
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

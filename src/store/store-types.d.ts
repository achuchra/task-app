interface IUserActionPayload {
  params: { seed: string; page: number };
  next?: boolean;
}

interface IUserPayload {
  results: IUser[] | [];
  fetching: boolean;
  fetched: boolean;
  error: boolean;
  page: number;
}

interface IGetUsersAsync {
  type: 'GET_USERS_ASYNC';
  payload: IGetUsersResponse;
}

interface IGetNextUsersAsync {
  type: 'GET_NEXT_USERS_ASYNC';
  payload: IGetUsersResponse;
}

interface ISetUsersFetching {
  type: 'SET_USERS_FETCHING';
}

interface ISetUsersError {
  type: 'SET_USERS_ERROR';
}

interface ISetSeed {
  type: 'SET_SEED';
  payload: string;
}

type TAction = IGetUsersAsync | IGetNextUsersAsync | ISetSeed | ISetUsersFetching | ISetUsersError;

interface IUserState {
  users: IUserPayload;
}

interface ISeedState {
  currentSeed: string;
}

type TAppState = {
  users: IUserState;
  seed: ISeedState;
};

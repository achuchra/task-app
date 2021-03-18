import * as actionTypes from '../../constants/action-types';

export const userInitialState = {
  users: {
    results: [],
    fetching: false,
    fetched: false,
    error: false,
    page: 1,
  },
};

const userReducer = (state: IUserState = userInitialState, action: TAction): IUserState => {
  switch (action.type) {
    case actionTypes.GET_USERS_ASYNC:
      return {
        ...state,
        users: {
          ...state.users,
          results: action.payload.results,
          fetching: false,
          fetched: true,
          error: false,
          page: action.payload.info.page,
        },
      };
    case actionTypes.GET_NEXT_USERS_ASYNC:
      return {
        ...state,
        users: {
          ...state.users,
          results: [...state.users.results, ...action.payload.results],
          fetching: false,
          fetched: true,
          error: false,
          page: action.payload.info.page,
        },
      };
    case actionTypes.SET_USERS_FETCHING:
      return {
        ...state,
        users: {
          ...state.users,
          fetching: true,
          fetched: false,
        },
      };
    case actionTypes.SET_USERS_ERROR:
      return {
        ...state,
        users: {
          ...state.users,
          error: true,
          fetching: false,
        },
      };
    default:
      return { ...state };
  }
};

export default userReducer;

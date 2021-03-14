import * as actionTypes from '../../constants/action-types';

export const seedInitialState = {
  currentSeed: 'abc',
};

const userReducer = (state: ISeedState = seedInitialState, action: TAction): ISeedState => {
  switch (action.type) {
    case actionTypes.SET_SEED:
      return {
        ...state,
        currentSeed: action.payload,
      };
    default:
      return { ...state };
  }
};

export default userReducer;

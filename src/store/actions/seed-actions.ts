import { Action } from 'redux';
import { SET_SEED } from '../../constants/action-types';

interface ActionWithPayload<T> extends Action {
  payload: T;
}

const setSeedAction = (seedValue: string): ActionWithPayload<string> => ({
  type: SET_SEED,
  payload: seedValue,
});

export default setSeedAction;

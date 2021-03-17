import { ActionWithPayload } from '../action-with-payload.interface';
import { SET_SEED } from '../../constants/action-types';

const setSeedAction = (seedValue: string): ActionWithPayload<string> => ({
  type: SET_SEED,
  payload: seedValue,
});

export default setSeedAction;

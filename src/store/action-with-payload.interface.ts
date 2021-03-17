import { Action } from 'redux';

export interface ActionWithPayload<T> extends Action<string> {
  type: string;
  payload: T;
}

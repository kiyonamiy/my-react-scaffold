import * as constants from './constants';
import { IncrementAction, DecrementAction } from '../types/store';

export function getIncrementAction(): IncrementAction {
  return {
    type: constants.INCREMENT
  };
}

export function getDecrementAction(): DecrementAction {
  return {
    type: constants.DECREMENT
  };
}

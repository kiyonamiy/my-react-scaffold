import { ModifyAction, ExampleStoreState } from '../types/store';
import * as constants from './constants';

// 定义 State 结构类型

const defaultState: ExampleStoreState = {
  value: 0
};

export default (
  state: ExampleStoreState = defaultState,
  action: ModifyAction
): ExampleStoreState => {
  switch (action.type) {
    case constants.INCREMENT:
      return { value: state.value + 1 };
    case constants.DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};

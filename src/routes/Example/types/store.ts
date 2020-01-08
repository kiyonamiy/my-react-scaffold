import { constants } from '../store';

export type INCREMENT = typeof constants.INCREMENT;
export type DECREMENT = typeof constants.DECREMENT;

export interface IncrementAction {
  type: INCREMENT;
}

export interface DecrementAction {
  type: DECREMENT;
}

export type ModifyAction = IncrementAction | DecrementAction;

export interface ExampleStoreState {
  value: number;
}

export interface ExampleStoreDispatch {
  onDecrement: () => void;
  onIncrement: () => void;
}

export type ExampleProps = ExampleStoreState & ExampleStoreDispatch;

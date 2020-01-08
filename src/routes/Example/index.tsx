import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { actionCreators } from './store';
import { ExampleProps, ExampleStoreState, ExampleStoreDispatch } from './types/store';
import { StoreState } from '../../store/type';

function Example(props: ExampleProps) {
  const { value, onIncrement, onDecrement } = props;

  return (
    <div>
      Clicked: {value} times
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

const mapStateToProps = (state: StoreState): ExampleStoreState => ({
  value: state.example.value
});

const mapDispatchToProps = (dispatch: Dispatch): ExampleStoreDispatch => ({
  onDecrement: () => dispatch(actionCreators.getDecrementAction()),
  onIncrement: () => dispatch(actionCreators.getIncrementAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);

import {RECEIVE_BENCHES} from '../actions/bench_actions';

export const BenchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      let newState = {};
      // debugger
      action.benches.forEach((bench) => newState[bench.id] = bench);
      return newState;
    default:
      return state;
  }
};

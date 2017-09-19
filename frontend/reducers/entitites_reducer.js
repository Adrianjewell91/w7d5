import {combineReducers} from 'redux';

import {BenchReducer} from './benches_reducer';

const EntitiesReducer = combineReducers({
  benches: BenchReducer
})

export default EntitiesReducer;

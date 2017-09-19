import React from 'react';
import {connect} from 'react-redux';
import {fetchBenches} from '../../actions/bench_actions';
import BenchIndex from "./bench_index"

import values from "lodash/values";

const benchesArray = (state) => {
  return Object.keys(state.entities.benches).map((id) => state.entities.benches[id])
}

const mapStateToProps = state => ({
  benches: benchesArray(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);

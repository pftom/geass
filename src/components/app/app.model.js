import Model from '../../core/';
import { Component } from '../../core/react';

import AppView from './app.view';

@Model({
  namespace: 'app',
  template: AppView,
  mapStateToProps: (state) => {
    const { current, record } = state.app;

    return {
      current,
      record,
    };
  },
})
export default class AppModel extends Component {
  state = {
    current: 0,
    record: 0,
  };

  schedule = {
    // 让saga effects 方法触手可及
    *add(action, { put, call, delay }) {
      yield call(delay, 1000);
      yield put({ type: 'minus' });
    },
  };

  reducer = {
    // add or minus represent action name
    add(state) {
      const newCurrent = state.current + 1;

      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state) {
      return {
        ...state,
        current: state.current - 1,
      };
    },
  };
}
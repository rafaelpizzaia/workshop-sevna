import { ReduceStore } from 'flux/utils';
import FactActionTypes from '../actions/FactActionTypes';
import Dispatcher from '../Dispatcher';

class FactStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return { facts: [] };
  }

  reduce(state, action) {
    switch (action.type) {
      case FactActionTypes.GET_FACT:
        return { ...state, facts: [...state.facts, action.fact] };

      default:
        return state;
    }
  }
}

export default new FactStore();

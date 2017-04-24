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

      case FactActionTypes.SORT_FACTS:
        const sortedFacts = state.facts.sort((a, b) => {
          if (`${a.category}` < `${b.category}`) return -1; 

          if (`${a.category}` > `${b.category}`) return 1; 
          
          return 0;
        });

        return { ...state, facts: [...sortedFacts] };

      case FactActionTypes.CLEAN_FACTS:
        return { ...state, facts: [] };
      
      default:
        return state;
    }
  }
}

export default new FactStore();

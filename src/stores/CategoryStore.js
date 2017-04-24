import { ReduceStore } from 'flux/utils';
import CategoryActionTypes from '../actions/CategoryActionTypes';
import Dispatcher from '../Dispatcher';

class CategoryStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return { categories: [] };
  }

  reduce(state, action) {
    switch (action.type) {
      case CategoryActionTypes.GET_CATEGORIES:
        return { ...state, categories: action.categories };

      default:
        return state;
    }
  }
}

export default new CategoryStore();
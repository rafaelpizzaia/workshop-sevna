import CategoryActionTypes from './CategoryActionTypes';
import Dispatcher from '../Dispatcher';
import ChuckNorrisApi from '../sources/ChuckNorrisApi';

const CategoryActions = {
  getCategories() {
    ChuckNorrisApi.getCategories()
      .then(data => {
        Dispatcher.dispatch({
          type: CategoryActionTypes.GET_CATEGORIES,
          categories: data,
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  },
};

export default CategoryActions;

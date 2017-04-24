import FactActionTypes from './FactActionTypes';
import Dispatcher from '../Dispatcher';
import ChuckNorrisApi from '../sources/ChuckNorrisApi';

const FactActions = {
  getFact(category) {
    ChuckNorrisApi.getFact(category)
      .then(data => {
        Dispatcher.dispatch({
          type: FactActionTypes.GET_FACT,
          fact: data,
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  },
};

export default FactActions;

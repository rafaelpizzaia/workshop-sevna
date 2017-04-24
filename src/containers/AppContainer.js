import React, { Component } from 'react';
import { Container } from 'flux/utils';

// Actions
import CategoryActions from '../actions/CategoryActions';
import FactActions from '../actions/FactActions';

// Components
import Form from '../components/Form';
import Facts from '../components/Facts';

// Stores
import CategoryStore from '../stores/CategoryStore';
import FactStore from '../stores/FactStore';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.handleFetchFact = this.handleFetchFact.bind(this);
  }

  static getStores() {
    console.log('getStores');
    return [
      CategoryStore,
      FactStore,
    ];
  }

  static calculateState() {
    console.log('calculateState');
    return {
      categories: CategoryStore.getState().categories,
      facts: FactStore.getState().facts,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    CategoryActions.getCategories();
  }

  handleFetchFact(category) {
    FactActions.getFact(category);
  }

  render() {
    console.log('render');
    return (
      <div>
        <Form
          categories={this.state.categories}
          onFetchFact={this.handleFetchFact}
        />
        <Facts facts={this.state.facts} />
      </div>
    );
  }
}

export default Container.create(AppContainer);

import React, { Component } from 'react';
import Fact from './Fact';
import './Facts';

class Facts extends Component {
  render() {
    const {
      facts,
    } = this.props;

    console.log('render facts');
    return (
      <div>
        {
          facts.map((fact, key) => {
            return (
              <Fact
                key={`fact_${key}`}
                fact={fact}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Facts;

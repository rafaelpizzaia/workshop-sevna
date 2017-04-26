import React, { Component, PropTypes } from 'react';
import Fact from './Fact';
import './Facts';

class Facts extends Component {
  render() {
    const {
      facts,
    } = this.props;

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

Facts.propTypes = {
  facts: PropTypes.array.isRequired,
};

export default Facts;

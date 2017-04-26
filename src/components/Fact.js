import React, { Component, PropTypes } from 'react';

class Fact extends Component {
  render() {
    const {
      icon_url,
      value,
      category,
    } = this.props.fact;

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          border: '1px solid rgba(0, 0, 0, .2)',
          margin: 5,
          color: '#3d3d3d',
        }}
      >
        <img
          alt="chuck norris"
          style={{
            width: 35,
            marginRight: 10,
          }}
          src={!!category ? require(`../images/${category}.svg`) : icon_url}
        />
        <label>
          Fact: &nbsp;
        </label>
        <div>
          {value}
        </div>
      </div>
    )
  }
};

Fact.propTypes = {
  fact: PropTypes.shape({
    icon_url: PropTypes.string,
    value: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Fact;
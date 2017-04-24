import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "none",
    };

    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangeCategory(event) {
    this.setState({
      category: event.target.value,
    });
  }

  handleClick() {
    this.props.onFetchFact(this.state.category);
  }

  render() {
    const {
      categories,
      onSortFacts,
      onCleanFacts,
    } = this.props;

    const styles = {
      root: {
        margin: 5,
        padding: 20,
      },
      select: {
        width: 120,
        height: 30,
        marginRight: 40,
      },
      btn: {
        border: '1px solid black',
        backgroundColor: 'white',
        width: 120,
        height: 30,
        fontWeight: 'bold',
        marginRight: 10,
      }
    }

    return (
      <div
        style={styles.root}
      >
        <label>
          Category: &nbsp;
        </label>
        <select
          style={styles.select}
          value={this.state.category}
          onChange={this.handleChangeCategory}
        >
          <option
            key="category_none"
            value="none"
          >
            None
          </option>
          {
            categories.map((category, key) => {
              return (
                <option
                  key={`category_${key}`}
                  value={category}
                >
                  {category}
                </option>
              );
            })
          }
        </select>

        <button
          style={styles.btn}
          onClick={this.handleClick}
        >
          Get a Fact
        </button>

        <button
          style={styles.btn}
          onClick={onSortFacts}
        >
          Sort Facts
        </button>

        <button
          style={styles.btn}
          onClick={onCleanFacts}
        >
          Clean Facts
        </button>
      </div>
    );
  }
}

export default Form;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

import './styles.sass';

class AddTodo extends Component {

  state = {
    value: ''
  }

  handeChange = ({ target: { value } }) => {
    this.setState({ value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    if (!value.trim()) return;
    this.props.addTodo(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.onSubmit} className="add">
        <input
          onChange={this.handeChange}
          value={value}
          autoFocus={true}
          placeholder="To do"
          className="input"
        />
        <button type="submit" className="btn">
          Add Todo
        </button>
      </form>
    );
  }

};

export default connect(null, { addTodo })(AddTodo);
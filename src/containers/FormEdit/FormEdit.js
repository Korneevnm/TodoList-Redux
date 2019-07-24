import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTodo } from '../../actions';

class FormEdit extends Component {

  state = {
    value: this.props.text
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.editTodo(this.state.value, this.props.id);
  }

  render() {
    return (
      <form className="todo" onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
          autoFocus={true}
        />
        <div className="buttons">
          <button className="btn save" title="Save"></button>
          <div
            className="btn cancel"
            onClick={this.props.handleEditTodo}
            title="Cancel"></div>
        </div>
      </form>
    );
  };
};

export default connect(null, { editTodo })(FormEdit);
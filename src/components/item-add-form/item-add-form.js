import React, { Component } from 'react'
import './item-add-form.css'
export default class ItemAddForm extends Component {
  state = {
    label: '',
  }
  onLabelInput = (event) => {
    this.setState({
      label: event.target.value,
    })
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.onAdded(this.state.label)
    this.setState({
      label: '',
    })
  }
  render() {
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control input-form"
          placeholder="What needs to be done"
          onChange={this.onLabelInput}
          value={this.state.label}
        />
        <input type="submit" className="btn btn-primary" value="Add Item" />
      </form>
    )
  }
}

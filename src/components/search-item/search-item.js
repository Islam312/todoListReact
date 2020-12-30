import React, { Component } from 'react'

import './search-item.css'

export default class SearchItem extends Component {
  state = {
    term: '',
  }
  onSearchItem = (e) => {
    const term = e.target.value.toLowerCase()
    this.setState({ term })
    this.props.onSearchChange(term)
  }
  render() {
    return (
      <input
        type="text"
        placeholder="Search"
        className="form-control search-item"
        onChange={this.onSearchItem}
        value={this.state.term}
      />
    )
  }
}

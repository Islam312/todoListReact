import React, { Component } from 'react'

import './app-list-item.css'

export default class AppListItem extends Component {
  //*рендеринг***********************************************
  render() {
    //* Деструктуризация свойств и состояния компонента******
    const {
      label,
      onDeleted,
      onToggleDone,
      onToggleImportant,
      done,
      important,
    } = this.props

    let classNames = 'app-list-item'
    //* создание логической булевой связки ******************
    if (done) {
      classNames += ' done-item'
    }
    if (important) {
      classNames += ' mark-item'
    }
    //* JSX разметка*****************************************
    return (
      <span className={classNames}>
        <span className="app-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <div>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={onDeleted}
          >
            <i className="fa fa-trash"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={onToggleImportant}
          >
            <i className="fa fa-exclamation"></i>
          </button>
        </div>
      </span>
    )
  }
}

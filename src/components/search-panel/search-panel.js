import React from 'react'

import SearchItem from '../search-item'
import ItemStatusFilter from '../item-status-filter'

import './search-panel.css'

const SearchPanel = ({ onSearchChange, onFilterChange, filter }) => {
  return (
    <div className="search-panel">
      <SearchItem onSearchChange={onSearchChange} />
      <ItemStatusFilter onFilterChange={onFilterChange} filter={filter} />
    </div>
  )
}

export default SearchPanel

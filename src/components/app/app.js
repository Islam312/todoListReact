import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import AppList from '../app-list'
import ItemAddForm from '../item-add-form'

import './app.css'

export default class App extends Component {
  //*======================================== для генерации id =============================================
  maxId = 100
  //*======================================== состояние элемента ===========================================
  state = {
    data: [
      this.createItem('Make Awesome App!'),
      this.createItem('Make Homework!'),
      this.createItem('Help someone!'),
    ],
    term: '',
    filter: 'all',
  }
  //*======================================= создание элемента =============================================
  createItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++,
    }
  }
  //*======================================= удаление элемента ==============================================
  deleteItem = (id) => {
    this.setState(({ data }) => {
      const indexItem = data.findIndex((element) => {
        return element.id === id
      })
      //* spread оператор для нового состояния
      const newArray = [
        ...data.slice(0, indexItem),
        ...data.slice(indexItem + 1),
      ]

      return {
        data: newArray,
      }
    })
  }
  //*======================================= добавление элемента =============================================
  addItem = (label) => {
    const newTask = this.createItem(label)

    this.setState(({ data }) => {
      const newArray = [...data, newTask]
      return { data: newArray }
    })
  }
  //*======================================= поиск элемента ==================================================
  searchItem = (items, filteredItems) => {
    if (filteredItems.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(filteredItems) !== -1
    })
  }
  //*======================================= изменение состояние поиска ======================================
  onSearchChange = (term) => {
    this.setState({ term })
  }
  //*======================================= фильтр элементов ================================================
  filter = (items, filterName) => {
    switch (filterName) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => {
          return !item.done
        })
      case 'done':
        return items.filter((item) => {
          return item.done
        })
      default:
        return items
    }
  }
  //*======================================= фильтр состояния элементов списка ================================
  onFilterChange = (filter) => {
    this.setState({ filter })
  }
  //*======================================= создание свойств элемента =========================================
  onToggleProperty(array, id, property) {
    const index = array.findIndex((element) => {
      return element.id === id
    })
    let arrayItem = array[index]
    let newItem = {
      ...arrayItem,
      [property]: !arrayItem[property],
    }

    return [...array.slice(0, index), newItem, ...array.slice(index + 1)]
  }
  //*======================================= зачеркивание элемента =============================================
  onToggleDone = (id) => {
    this.setState(({ data }) => {
      return {
        data: this.onToggleProperty(data, id, 'done'),
      }
    })
  }
  //*======================================= важность элемента =================================================
  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      return {
        data: this.onToggleProperty(data, id, 'important'),
      }
    })
  }

  render() {
    //*===================================== деструктуризация данных ===========================================
    const { data, term, filter } = this.state
    //*===================================== для панеля видимости решенных,нерешенных, важных задач ============
    const doneCount = data.filter((el) => {
      return el.done
    }).length
    const todoCount = data.length - doneCount
    const importantCount = data.filter((el) => el.important).length
    //*===================================== фильтрации элементов ==============================================
    const visibleState = this.filter(this.searchItem(data, term), filter)
    return (
      <div className="app">
        <AppHeader
          doneCount={doneCount}
          todoCount={todoCount}
          importantCount={importantCount}
        />
        <SearchPanel
          onSearchChange={this.onSearchChange}
          onFilterChange={this.onFilterChange}
          filter={filter}
        />
        <AppList
          todoData={visibleState}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onAdded={this.addItem} />
      </div>
    )
  }
}

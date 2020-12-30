import React from 'react'

import AppListItem from '../app-list-item'

import './app-list.css'

const AppList = ({ todoData, onDeleted, onToggleDone, onToggleImportant }) => {
  //*Создание элемента через свойство Props

  const todoItems = todoData.map((item) => {
    //*Деструктуризация и разделение объекта

    const { id, ...itemProps } = item

    //*если props и наименование ключа похожи
    //* то можно просто открыть объект с помощью Spread оператора,
    //* то есть было label = {item.label} important = {item.important}
    //* а теперь {...item}

    return (
      <li key={id} className="list-group-item">
        <AppListItem
          {...itemProps}
          onDeleted={() => {
            onDeleted(id)
          }}
          onToggleDone={() => {
            onToggleDone(id)
          }}
          onToggleImportant={() => {
            onToggleImportant(id)
          }}
        />
      </li>
    )
  })
  return <ul className="list-group app-list">{todoItems}</ul>
}

export default AppList

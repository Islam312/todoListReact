import React from 'react'

import './app-header.css'
//*================================= Шапка списка состоит из данных с главного App=================
const AppHeader = ({doneCount, todoCount, importantCount}) => {
  return (
      <div className="app-header"> 
        <h1>Todo List</h1>
        <h2> {todoCount} more todo, {doneCount} done,<br/>important {importantCount}</h2>
      </div>
  )
}
export default AppHeader

// @flow
import React from 'react'
import type Task from './Types'

const formatTime = (time: Date): string =>
  `${time.getHours()}:${String(time.getMinutes()).padStart(2, '0')}`

const App = ({
  inputValue,
  listItems,
  handleInputChange,
  handleSubmit,
  clearForm
}: {|
  inputValue: string,
  listItems: Task[],
  handleInputChange: Function, // TODO: signatures?
  handleSubmit: Function,
  clearForm: Function,
|}) => (
  <div className='body'>
    <div className='container'>
      <header className='heading'>
        <h1 className='main-heading'>widid a redux</h1>
        <form onSubmit={handleSubmit(inputValue)}>
          <input
            className='input'
            onChange={event => {
              handleInputChange(event.target.value)
              event.preventDefault()
            }}
            placeholder='…'
            value={inputValue}
          />
        </form>
      </header>
      <ul className='list'>
        {listItems.length !== 0 &&
          listItems.map(({ id, title, time }) => (
            <ListItem key={id} title={title} time={time} />
          ))}
      </ul>
      <a className='button' href='#' onClick={clearForm}>
        Clear list
      </a>
    </div>
  </div>
)

export default App

// TODO: pass entire task.
const ListItem = ({ title, time }: { title: string, time: Date }) => {
  return (
    <li>
      <p className='text'>
        {title}
        <span className='time'>{formatTime(time)}</span>
      </p>
    </li>
  )
}

// TODO: can you specify enums and stuff/ compare to proptypes

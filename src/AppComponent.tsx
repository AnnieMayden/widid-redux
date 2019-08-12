import React from 'react'
import getCow from './cow'

const formatTime = time =>
  `${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}`

const App = ({
  inputValue,
  listItems,
  handleInputChange,
  handleSubmit,
  clearForm
}) => (
  <div className='body'>
    <div className='container'>
      <header className='heading'>
        <h1 className='main-heading'>widid a redux {getCow()}</h1>
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

const ListItem = ({ title, time }) => {
  return (
    <li>
      <p className='text'>
        {title}
        <span className='time'>{formatTime(time)}</span>
      </p>
    </li>
  )
}

// todo proptypes

import React from 'react'

const App = ({ inputValue, listItems,  handleInputChange, handleSubmit, clearForm}) =>
  <div className='body'>
    <div className='container'>
        <header className='heading'>
            <h1 className='main-heading'>widid a redux</h1>
            <form onSubmit={ _ => handleSubmit(inputValue)}>
                <input className='input'  onChange={event => {
                                            handleInputChange(event.target.value)
                                           event.preventDefault()
                                          }
                } placeholder='…' value={inputValue} />
            </form>
        </header>
        <ul className='list'>
           {listItems.length !== 0 &&
           listItems.map(({ title, time }) => <ListItem title={title} time={time} />)}
        </ul><a className='button' href='#' onClick={clearForm}>Clear list</a></div>
</div>

export default App

const ListItem = ({ title, time }) => {
  return (
    <li>
      <p className='text'>{title}<span className='time'>{time}</span></p>
    </li>
  )
}

//todo proptypes
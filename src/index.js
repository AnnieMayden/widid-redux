import React from 'react'
import { render } from 'react-dom'
import App from './AppContainer'
import { reducer } from './AppContainer'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
const InitialState = {
  inputValue: '',
  listItems: []
}

render(
  <Provider
    store={createStore(
      reducer,
      InitialState,
      applyMiddleware(createLogger({ diff: true }))
    )}
  >
    <App />
  </Provider>,
  document.getElementById('app')
)

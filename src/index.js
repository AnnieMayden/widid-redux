import React from 'react'
import { render } from 'react-dom'
import App from './AppContainer'
import { reducer } from './AppContainer'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import helllo from 'helllo'

helllo()

render(
  <Provider
    store={createStore(reducer, applyMiddleware(createLogger({ diff: true })))}
  >
    <App />
  </Provider>,
  document.getElementById('app')
)

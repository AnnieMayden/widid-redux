import React from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { render, fireEvent, cleanup } from '@testing-library/react'
import App, { reducer } from '../AppContainer'

require('@babel/polyfill')

// TODO: use jest
const { describe, it, expect, afterEach } = global

afterEach(cleanup)

describe('App', () => {
  it('allows you to type in a task', async () => {
    const store = createStore(reducer)

    const { getByText, findByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    fireEvent.change(getByPlaceholderText('…'), { target: { value: 'annie' } })

    const input = await getByPlaceholderText('…')

    expect(input.value).toEqual('annie')
  })
})

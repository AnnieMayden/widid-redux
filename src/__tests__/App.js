import React from 'react'
require('@babel/polyfill')
import 'jest-dom/extend-expect'
import { createStore } from 'redux'
import App, { reducer } from '../AppContainer'
import { Provider, connect } from 'react-redux'
import { createTaskItem } from '../AppContainer'
import { render, fireEvent, cleanup, wait } from '@testing-library/react'

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
    debugger
    expect(input.value).toEqual('annie')
  })

  it('allows you to add a task to list', async () => {
    const store = createStore(reducer)

    const { getByText, findByText, getByPlaceholderText, container, debug } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    fireEvent.change(getByPlaceholderText('…'), { target: { value: 'annie' } })


    const submitEvent = new window.Event('submit')
    const form = container.querySelector('form')
    debug(form)
    form.dispatchEvent(submitEvent)

    await wait(()=> {
      expect(getByText(/annie/)).toBeInTheDocument()
    })
  })
})

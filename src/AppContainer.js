// @flow
import uuidv4 from 'uuid/v4'
import { connect } from 'react-redux'
import AppComponent from './AppComponent'

import type { Task } from './Types'

type State = {| +inputValue: string, +listItems: Array<Task> |}

type HandleInputChange = {| type: 'HANDLE_INPUT_CHANGE', value: string |}
type HandleSubmit = {| type: 'HANDLE_SUBMIT', task: Task |}
type ClearForm = {| type: 'ClEAR_FORM' |}

type Action = HandleInputChange | HandleSubmit | ClearForm

const initialState: State = {
  inputValue: '',
  listItems: []
}

const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE'
const HANDLE_SUBMIT = 'HANDLE_SUBMIT'
const ClEAR_FORM = 'ClEAR_FORM'

const handleInputChange = (value: string): HandleInputChange => ({
  type: HANDLE_INPUT_CHANGE,
  value
})

const handleSubmit = (task: Task): HandleSubmit => ({
  type: HANDLE_SUBMIT,
  task
})

const clearForm = (): ClearForm => ({
  type: ClEAR_FORM
})

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case HANDLE_INPUT_CHANGE:
      return {
        ...state,
        inputValue: action.value
      }
    case HANDLE_SUBMIT:
      return {
        ...state,
        listItems: [...state.listItems, action.task],
        inputValue: ''
      }
    case ClEAR_FORM:
      return {
        ...state,
        listItems: []
      }
    default:
      // TODO: works?
      // Make sure every state change type is handled
      ;(action: empty)
      return state
  }
}

export const createTaskItem = (task: string): Task => ({
  id: uuidv4(),
  title: task,
  time: new Date()
})

const mapStateToProps = state => ({
  inputValue: state.inputValue,
  listItems: state.listItems
})

const mapDispatchToProps = dispatch => ({
  handleInputChange: (value: string) => {
    dispatch(handleInputChange(value))
  },
  handleSubmit: (inputValue: string) => (e: Event) => {
    e.preventDefault()
    dispatch(handleSubmit(createTaskItem(inputValue)))
  },
  clearForm: () => dispatch(clearForm())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

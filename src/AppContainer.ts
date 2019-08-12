import uuidv4 from 'uuid/v4'
import { connect } from 'react-redux'
import AppComponent from './AppComponent'

import { Task }  from './Types'

type State = { inputValue: string, listItems: Array<Task> } // todo required props and the only props

type HandleInputChange = { type: 'HANDLE_INPUT_CHANGE', value: string } // todo the only props
type HandleSubmit = { type: 'HANDLE_SUBMIT', task: Task }
type ClearForm = { type: 'ClEAR_FORM' }

type Action = HandleInputChange | HandleSubmit | ClearForm

const InitialState: State = {
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

export const reducer = (state: State = InitialState, action : Action): State => {
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
      return state
  }
}

export const createTaskItem = (task: string): Task => ({
  id: uuidv4(),
  title: task,
  time: new Date()
})

const mapStateToProps = (state: State) => ({
  inputValue: state.inputValue,
  listItems: state.listItems
})

const mapDispatchToProps = (dispatch: any) => ({
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

// todo proptypes

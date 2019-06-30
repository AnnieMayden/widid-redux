import uuidv4 from 'uuid/v4'
import { connect } from 'react-redux'
import AppComponent from './AppComponent'

const initialState = {
  inputValue: '',
  listItems: []
}

const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE'
const HANDLE_SUBMIT = 'HANDLE_SUBMIT'
const ClEAR_FORM = 'ClEAR_FORM'

const handleInputChange = value => ({
  type: HANDLE_INPUT_CHANGE,
  payload: { value }
})

const handleSubmit = taskObject => ({
  type: HANDLE_SUBMIT,
  payload: { taskObject }
})

const clearForm = _ => ({
  type: ClEAR_FORM
})

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLE_INPUT_CHANGE:
      return {
        ...state,
        inputValue: payload.value
      }
    case HANDLE_SUBMIT:
      return {
        ...state,
        listItems: [...state.listItems, payload.taskObject],
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

export const createTaskItem = task => ({
  id: uuidv4(),
  title: task,
  time: new Date()
})

const mapStateToProps = state => ({
  inputValue: state.inputValue,
  listItems: state.listItems
})

const mapDispatchToProps = dispatch => ({
  handleInputChange: value => {
    dispatch(handleInputChange(value))
  },
  handleSubmit: inputValue => e => {
    e.preventDefault()
    dispatch(handleSubmit(createTaskItem(inputValue)))
  },
  clearForm: _ => dispatch(clearForm())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

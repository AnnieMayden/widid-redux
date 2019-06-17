import  uuidv4 from 'uuid/v4'
import { connect } from 'react-redux'
import AppComponent from './AppComponent'

const InitialState = {
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

export const reducer = (state = InitialState, { type, payload }) => {
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
    const date = new Date()
    const id = uuidv4()
    const newListItem = {
      id,
      title: inputValue,
      time: `${date.getHours()}:${date.getMinutes()}`
    }
    dispatch(handleSubmit(newListItem))
  },
  clearForm: _ => dispatch(clearForm())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

// todo proptypes

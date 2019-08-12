import uuidv4 from 'uuid/v4'
import { connect } from 'react-redux'
import AppComponent from './AppComponent'

const InitialState: {
  inputValue: any
  listItems: any[]
} = {
  inputValue: '',
  listItems: []
}

const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE'
const HANDLE_SUBMIT = 'HANDLE_SUBMIT'
const ClEAR_FORM = 'ClEAR_FORM'

const handleInputChange = (value: any) => ({
  type: HANDLE_INPUT_CHANGE,
  payload: { value }
})

const handleSubmit = (taskObject: any) => ({
  type: HANDLE_SUBMIT,
  payload: { taskObject }
})

const clearForm = () => ({
  type: ClEAR_FORM
})

export const reducer = (state: any = InitialState, { type, payload }: { type: any, payload: any }) => {
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

export const createTaskItem = (task: any) => ({
  id: uuidv4(),
  title: task,
  time: new Date()
})

const mapStateToProps = (state: any) => ({
  inputValue: state.inputValue,
  listItems: state.listItems
})

const mapDispatchToProps = (dispatch: any) => ({
  handleInputChange: (value: any) => {
    dispatch(handleInputChange(value))
  },
  handleSubmit: (inputValue: any) => (e: any) => {
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

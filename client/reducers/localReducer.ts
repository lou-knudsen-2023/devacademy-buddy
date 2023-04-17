import { LocalAction } from '../actions/local'
import { User } from '../../models/Users'

const initialState: User[] = []

function localReducer(state = initialState, action: LocalAction): User[] {
  const { type, payload } = action

  switch (type) {
    case 'SET_LOCALUSERS':
      return payload
    case 'ADD_LOCALUSER':
      return [...state, payload]
    case 'GET_LOCALUSER':
      return state
    case 'DEL_LOCALUSER':
      return state.filter((local) => local.id !== payload)
    default:
      return state
  }
}

export default localReducer

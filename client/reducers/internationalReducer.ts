import { InternationalAction } from '../actions/international'
import { User } from '../../models/Users'

const initialState: User[] = []

function InternationalReducer(
  state = initialState,
  action: InternationalAction
): User[] {
  const { type, payload } = action

  switch (type) {
    case 'SET_INTUSERS':
      return payload
    case 'ADD_INTUSERS':
      return [...state, payload]
    case 'GET_INTUSERS':
      return state.filter((local) => local.id === payload)
    case 'DEL_INTUSERS':
      return state.filter((local) => local.id !== payload)
    default:
      return state
  }
}

export default InternationalReducer

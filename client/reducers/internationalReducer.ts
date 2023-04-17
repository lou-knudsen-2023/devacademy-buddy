<<<<<<< HEAD
import { Action } from '../actions/international'
import { addNewUser } from '../apis/apiClient'
=======
import { InternationalAction } from '../actions/international'
>>>>>>> 2259396f6f58214126a2e391d1dd4bf851eb13a5
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

<<<<<<< HEAD
import { Action } from '../actions/local'
import { User, UserData } from '../../models/Users'

const initialState: User[] = []

function localReducer(state = initialState, action: Action): UserData[] {
=======
import { LocalAction } from '../actions/local'
import { User } from '../../models/Users'

const initialState: User[] = []

function localReducer(state = initialState, action: LocalAction): User[] {
>>>>>>> 2259396f6f58214126a2e391d1dd4bf851eb13a5
  const { type, payload } = action

  switch (type) {
    case 'SET_LOCALUSERS':
      return payload
    case 'ADD_LOCALUSER':
      return [...state, payload]
    case 'GET_LOCALUSER':
      return state.filter((local) => local.id === payload)
    case 'DEL_LOCALUSER':
      return state.filter((local) => local.id !== payload)
    default:
      return state
  }
}

export default localReducer

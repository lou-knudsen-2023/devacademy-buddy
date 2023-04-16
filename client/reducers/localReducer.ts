import { Action } from '../actions/local'
import { User, UserData } from '../../models/Users'

const initialState: User[] = []

function localReducer(state = initialState, action: Action): UserData[] {
  const { type, payload } = action

  switch (type) {
    case 'ADD_LOCAL':
      return [...state, payload]
    case 'GET_LOCAL':
      return payload
    case 'DEL_LOCAL':
      return state.filter((local) => local.id !== payload)
    case 'UPDATE_LOCAL':
      return state.map((profile) => {
        if (profile.id === payload.id) {
          return { ...profile, ...payload }
        }
      })
    default:
      return state
  }
}

export default localReducer

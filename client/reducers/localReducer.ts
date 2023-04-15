import { LocalAction } from '../actions/local'
import { User } from '../../models/Users'

const initialState: User[] = []

function localReducer(state = initialState, action: LocalAction): User[] {
  const { type, payload } = action

  switch (type) {
    case 'SET_LOCALUSERS':
      return payload
    // case 'ADD_LOCALUSER':
    //   return [...state, payload]
    // case 'GET_LOCALUSERS':
    //   return payload
    // case 'DEL_LOCALUSER':
    //   return state.filter((local) => local.id !== payload)
    // case 'UPDATE_LOCALUSER':
    //   return state.map((profile) => {
    //     if (profile.id === payload.id) {
    //       return { ...profile, ...payload }
    //     }
    //   })
    default:
      return state
  }
}

export default localReducer

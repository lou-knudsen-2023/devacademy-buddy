import { InternationlAction } from '../actions/international'
import { User } from '../../models/Users'

const initialState: User[] = []

function internationalReducer(
  state = initialState,
  action: InternationlAction
): User[] {
  const { type, payload } = action

  switch (type) {
    // case 'ADD_INTERNATIONAL':
    //   return [...state, payload]
    case 'GET_INTUSERS':
      return payload
    // case 'DEL_INTERNATIONAL':
    //   return state.filter((profile) => profile.id !== payload)
    // case 'UPDATE_INTERNATIONAL':
    //   return state.map((profile) => {
    //     if (profile.id === payload.id) {
    //       return { ...profile, ...payload }
    //     }
    //   })
    default:
      return initialState
  }
}

export default internationalReducer

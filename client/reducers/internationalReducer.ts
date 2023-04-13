import { Action } from
import { *interface* } from

const initialState: *InternationalInterface*[] = []

function internationalReducer(state = initialState, action: Action): InternationalInterface[] {
  const { type, payload } = action

  switch (type) {
    case 'ADD_INTERNATIONAL':
      return [...state, payload]
      case 'GET_INTERNATIONAL':
        return payload
        case 'DEL_INTERNATIONAL':
          return state.filter((*profile*) => *profile*.id !== payload)
            case 'UPDATE_INTERNATIONAL':
              return state.map((profile) => {
                if (profile.id === payload.id) {
                  return { ...profile, ...payload }
                }
              })
              default:
                return state
            }
          }
               

export default internationalReducer
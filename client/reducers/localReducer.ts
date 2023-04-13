import { Action } from
import { *interface* } from

const initialState: *LocalInterface*[] = []

function localReducer(state = initialState, action: Action): InternationalInterface[] {
  const { type, payload } = action

  switch (type) {
    case 'ADD_LOCAL':
      return [...state, payload]
      case 'GET_LOCAL':
        return payload
        case 'DEL_LOCAL':
          return state.filter((*profile*) => *profile*.id !== payload)
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
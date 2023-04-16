import { ThunkAction } from '../store'
import { User } from '../../models/Users'
import {
  getAllUsersAPI,
  deleteUserAPI,
  addNewUserAPI,
  updateUserAPI,
  getSingleUserAPI,
} from '../apis/apiClient'

export const REQUEST_INTUSERS = 'REQUEST_INTUSERS'
export const GET_INTUSERS = 'GET_INTUSERS'
export const ADD_INTUSERS = 'ADD_INTUSERS'
export const UPDATE_INTUSERS = 'UPDATE_INTUSERS'
export const DEL_INTUSERS = 'DEL_INTUSERS'
export const SHOW_ERROR = 'SHOW ERROR'

//action types
export type InternationalAction =
  | { type: typeof REQUEST_INTUSERS; payload: User[] }
  | { type: typeof GET_INTUSERS; payload: number }
  | { type: typeof ADD_INTUSERS; payload: User }
  | { type: typeof UPDATE_INTUSERS; payload: User }
  | { type: typeof DEL_INTUSERS; payload: number }
  | { type: typeof SHOW_ERROR; payload: string }

//action creators
export function requestIntUser(requestInt: User[]): InternationalAction {
  console.log('Action - request international data')
  return {
    type: REQUEST_INTUSERS,
    payload: requestInt,
  }
}

export function getSingleInt(getInt: number): InternationalAction {
  console.log('Action - received all international data')
  return {
    type: GET_INTUSERS,
    payload: getInt,
  }
}

export function addInt(addInt: User): InternationalAction {
  console.log('Action - adding international', addInt)

  return {
    type: ADD_INTUSERS,
    payload: addInt,
  }
}

export function updateInt(updateInt: User): InternationalAction {
  return {
    type: UPDATE_INTUSERS,
    payload: updateInt,
  }
}

export function delInt(delId: number): InternationalAction {
  console.log('Action - deleted international id number..', delId)

  return {
    type: DEL_INTUSERS,
    payload: delId,
  }
}

export function showError(errorMessage: string): InternationalAction {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

// //THUNK actions

export function fetchAllIntUsers(): ThunkAction {
  return (dispatch) => {
    return getAllUsersAPI()
      .then((users) => {
        console.log(
          users,
          'Testing to see if all users show up (fetchAllIntUsers)'
        )
        dispatch(requestIntUser(users))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function getIntThunk(id: number): ThunkAction {
  return (dispatch) => {
    return getSingleUserAPI(id)
      .then(() => {
        dispatch(getSingleInt(id))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function addNewIntThunk(localUser: User): ThunkAction {
  return (dispatch) => {
    return addNewUserAPI(localUser)
      .then((user) => {
        console.log(user, 'Testing if can add new user (addNewIntThunk)')
        dispatch(addInt(user))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function updateIntThunk(id: number, local: User): ThunkAction {
  return (dispatch) => {
    return updateUserAPI(id, local)
      .then((method) => {
        console.log(method, 'Testing if can update user (updateIntThunk)')
        dispatch(updateInt(method))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function delIntThunk(id: number): ThunkAction {
  return (dispatch) => {
    return deleteUserAPI(id)
      .then(() => {
        dispatch(delInt(id))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

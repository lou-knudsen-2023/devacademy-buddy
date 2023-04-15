import { ThunkAction } from '../store'
import { User } from '../../models/Users'
import {
  getAllUsersAPI,
  getSingleUserAPI,
  deleteUserAPI,
  addNewUserAPI,
  updateUserAPI,
} from '../apis/apiClient'

export const SET_LOCALUSERS = 'SET_LOCALUSERS'
export const GET_LOCALUSER = 'GET_LOCALUSER'
export const ADD_LOCALUSER = 'ADD_LOCALUSER'
export const UPDATE_LOCALUSER = 'UPDATE_LOCALUSER'
export const DEL_LOCALUSER = 'DEL_LOCALUSER'
export const SHOW_ERROR = 'SHOW ERROR'

export type LocalAction =
  | { type: typeof SET_LOCALUSERS; payload: User[] }
  | { type: typeof GET_LOCALUSER; payload: User }
  | { type: typeof ADD_LOCALUSER; payload: User }
  | { type: typeof UPDATE_LOCALUSER; payload: User }
  | { type: typeof DEL_LOCALUSER; payload: User }
  | { type: typeof SHOW_ERROR; payload: string }

export function setLocals(setLocal: User[]): LocalAction {
  return {
    type: SET_LOCALUSERS,
    payload: setLocal,
  }
}

export function getSingleLocal(getLocal: User): LocalAction {
  return {
    type: GET_LOCALUSER,
    payload: getLocal,
  }
}

export function addLocal(addLocal: User): LocalAction {
  return {
    type: ADD_LOCALUSER,
    payload: addLocal,
  }
}

export function updateLocal(updateLocal: User): LocalAction {
  return {
    type: UPDATE_LOCALUSER,
    payload: updateLocal,
  }
}

export function delLocal(delLocal: User): LocalAction {
  return {
    type: DEL_LOCALUSER,
    payload: delLocal,
  }
}

export function showError(errorMessage: string): LocalAction {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function setLocalThunk(): ThunkAction {
  return (dispatch) => {
    return getAllUsersAPI()
      .then((users) => {
        console.log(
          users,
          'Testing to see if all users show up (setLocalThunk)'
        )
        dispatch(setLocals(users))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function getLocalThunk(id: number): ThunkAction {
  return (dispatch) => {
    return getSingleUserAPI(id)
      .then((user) => {
        console.log(user, 'Testing to see if all users show up (getLocalThunk)')
        dispatch(getSingleLocal(user))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function addNewLocalThunk(localUser: User): ThunkAction {
  return (dispatch) => {
    return addNewUserAPI(localUser)
      .then((user) => {
        dispatch(addLocal(user))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function updateLocalThunk(id: number, updateLocal: User): ThunkAction {return ()}

export function delLocalThunk(id: number, localUser: User): ThunkAction {
  return (dispatch) => {
    return delUser(id)
      .then(() => {
        dispatch(delLocalAction(id))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

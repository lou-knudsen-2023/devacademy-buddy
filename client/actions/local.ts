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
  | { type: typeof DEL_LOCALUSER; payload: number }
  | { type: typeof SHOW_ERROR; payload: string }

export function setLocals(setLocal: User[]): LocalAction {
  return {
    type: SET_LOCALUSERS,
    payload: setLocal,
  }
}

export function getSingleLocal(oneLocal: User): LocalAction {
  return {
    type: GET_LOCALUSER,
    payload: oneLocal,
  }
}

export function addLocal(Local: User): LocalAction {
  return {
    type: ADD_LOCALUSER,
    payload: Local,
  }
}

export function updateLocal(updateLocal: User): LocalAction {
  return {
    type: UPDATE_LOCALUSER,
    payload: updateLocal,
  }
}

export function delLocal(delId: number): LocalAction {
  return {
    type: DEL_LOCALUSER,
    payload: delId,
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
      .then((one) => {
        dispatch(getSingleLocal(one))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function addNewLocalThunk(localUser: User, token:string): ThunkAction {
  return (dispatch) => {
    return addNewUserAPI(localUser, token)
      .then((user) => {
        dispatch(addLocal(user))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function updateLocalThunk(id: number, local: User): ThunkAction {
  return (dispatch) => {
    return updateUserAPI(id, local)
      .then((method) => {
        console.log(method, 'Testing if can update user (updateLocalThunk)')
        dispatch(updateLocal(method))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function delLocalThunk(id: number): ThunkAction {
  return (dispatch) => {
    return deleteUserAPI(id)
      .then(() => {
        dispatch(delLocal(id))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

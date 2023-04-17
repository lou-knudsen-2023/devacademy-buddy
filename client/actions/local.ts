import { ThunkAction } from '../store'
<<<<<<< HEAD
import { User } from '../../common/interface'
import { getLocals, addLocal, delLocal, updateLocal } from '../apis/apiClient'
=======
import { User } from '../../models/Users'
import {
  getAllUsersAPI,
  getSingleUserAPI,
  deleteUserAPI,
  addNewUserAPI,
  updateUserAPI,
} from '../apis/apiClient'
>>>>>>> 2259396f6f58214126a2e391d1dd4bf851eb13a5

export const SET_LOCALUSERS = 'SET_LOCALUSERS'
export const GET_LOCALUSER = 'GET_LOCALUSER'
export const ADD_LOCALUSER = 'ADD_LOCALUSER'
export const UPDATE_LOCALUSER = 'UPDATE_LOCALUSER'
export const DEL_LOCALUSER = 'DEL_LOCALUSER'
export const SHOW_ERROR = 'SHOW ERROR'

<<<<<<< HEAD
export type Action =
  | { type: typeof GET_LOCAL; payload: User }
  | { type: typeof ADD_LOCAL; payload: User }
  | { type: typeof UPDATE_LOCAL; payload: User }
  | { type: typeof DEL_LOCAL; payload: User }
=======
export type LocalAction =
  | { type: typeof SET_LOCALUSERS; payload: User[] }
  | { type: typeof GET_LOCALUSER; payload: number }
  | { type: typeof ADD_LOCALUSER; payload: User }
  | { type: typeof UPDATE_LOCALUSER; payload: User }
  | { type: typeof DEL_LOCALUSER; payload: number }
>>>>>>> 2259396f6f58214126a2e391d1dd4bf851eb13a5
  | { type: typeof SHOW_ERROR; payload: string }

export function setLocals(setLocal: User[]): LocalAction {
  return {
    type: SET_LOCALUSERS,
    payload: setLocal,
  }
}

<<<<<<< HEAD
export function addNewLocal(addLocal: User): Action {
=======
export function getSingleLocal(getLocal: number): LocalAction {
>>>>>>> 2259396f6f58214126a2e391d1dd4bf851eb13a5
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

<<<<<<< HEAD
export function deleteLocal(delLocal: User): Action {
=======
export function delLocal(delId: number): LocalAction {
>>>>>>> 2259396f6f58214126a2e391d1dd4bf851eb13a5
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

<<<<<<< HEAD
export function getLocalsThunk(): ThunkAction {
  return (dispatch) => {
    return getAllLocals()
      .then((locals) => {
        dispatch(getLocals(locals))
=======
export function setLocalThunk(): ThunkAction {
  return (dispatch) => {
    return getAllUsersAPI()
      .then((users) => {
        console.log(
          users,
          'Testing to see if all users show up (setLocalThunk)'
        )
        dispatch(setLocals(users))
>>>>>>> 2259396f6f58214126a2e391d1dd4bf851eb13a5
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

<<<<<<< HEAD
export function addNewLocalThunk(local: User): ThunkAction {
  return (dispatch) => {
    return addNewLocal(local)
      .then((local) => {
        dispatch(addLocal(local))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function updateLocalThunk(local: User): ThunkAction {
  return (dispatch) => {
    dispatch(updateLocal(updatedLocal))
  }
}

export function delLocalThunk(local: User): ThunkAction {
  return (dispatch) => {
    return delUser(id)
      .then(() => {
        dispatch(delLocal(id))
=======
export function getLocalThunk(id: number): ThunkAction {
  return (dispatch) => {
    return getSingleUserAPI(id)
      .then(() => {
        dispatch(getSingleLocal(id))
>>>>>>> 2259396f6f58214126a2e391d1dd4bf851eb13a5
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
<<<<<<< HEAD
=======

export function addNewLocalThunk(localUser: User): ThunkAction {
  return (dispatch) => {
    return addNewUserAPI(localUser)
      .then((user) => {
        console.log(user, 'Testing if can add new user (addNewLocalThunk)')
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
>>>>>>> 2259396f6f58214126a2e391d1dd4bf851eb13a5

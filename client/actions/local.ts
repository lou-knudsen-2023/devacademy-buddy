import { ThunkAction } from '../store'
import { User } from '../../common/interface'
import { getLocals, addLocal, delLocal, updateLocal } from '../apis/apiClient'

export const GET_LOCAL = 'GET_LOCAL'
export const ADD_LOCAL = 'ADD_LOCAL'
export const UPDATE_LOCAL = 'UPDATE_LOCAL'
export const DEL_LOCAL = 'DEL_LOCAL'
export const SHOW_ERROR = 'SHOW ERROR'

export type Action =
  | { type: typeof GET_LOCAL; payload: User }
  | { type: typeof ADD_LOCAL; payload: User }
  | { type: typeof UPDATE_LOCAL; payload: User }
  | { type: typeof DEL_LOCAL; payload: User }
  | { type: typeof SHOW_ERROR; payload: string }

export function getLocal(local: User): Action {
  return {
    type: GET_LOCAL,
    payload: local,
  }
}

export function addNewLocal(addLocal: User): Action {
  return {
    type: ADD_LOCAL,
    payload: addLocal,
  }
}

export function updateLocal(updateLocal: User): Action {
  return {
    type: UPDATE_LOCAL,
    payload: updateLocal,
  }
}

export function deleteLocal(delLocal: User): Action {
  return {
    type: DEL_LOCAL,
    payload: delLocal,
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function getLocalsThunk(): ThunkAction {
  return (dispatch) => {
    return getAllLocals()
      .then((locals) => {
        dispatch(getLocals(locals))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

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
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

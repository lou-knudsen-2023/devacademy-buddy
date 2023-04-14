import { ThunkAction } from '../store'
import { User } from '../../models/Users'
import { FUNCTIONS } from '../apis/apiClient'

export const REQUEST_INTERNATIONAL = 'REQUEST_INTERNATIONAL'
export const GET_INTERNATIONAL = 'GET_INTERNATIONAL'
export const ADD_INTERNATIONAL = 'ADD_INTERNATIONAL'
export const UPDATE_INTERNATIONAL = 'UPDATE_INTERNATIONAL'
export const DEL_INTERNATIONAL = 'DEL_INTERNATIONAL'
export const SHOW_ERROR = 'SHOW ERROR'

//action types
export type Action =
  | { type: typeof REQUEST_INTERNATIONAL; payload: null }
  | { type: typeof GET_INTERNATIONAL; payload: User }
  | { type: typeof ADD_INTERNATIONAL; payload: User }
  | { type: typeof UPDATE_INTERNATIONAL; payload: User }
  | { type: typeof DEL_INTERNATIONAL; payload: User }
  | { type: typeof SHOW_ERROR; payload: string }

//action creators
export function requestInternational(): Action {
  console.log('Action - request international data')
  return {
    type: REQUEST_INTERNATIONAL,
    payload: null,
  }
}

export function getInternational(international: User[]): Action {
  console.log('Action - received all international data')
  return {
    type: GET_INTERNATIONAL,
    payload: international,
  }
}

export function addInternational(addInternational: User): Action {
  console.log('Action - adding international', addInternational)

  return {
    type: ADD_INTERNATIONAL,
    payload: addInternational,
  }
}

export function updateInternational(id: number): Action {
  console.log('Action - updated international id number..', id)

  return {
    type: UPDATE_INTERNATIONAL,
    payload: id,
  }
}

export function delInternational(id: number): Action {
  console.log('Action - deleted international id number..', id)

  return {
    type: DEL_INTERNATIONAL,
    payload: id,
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

//THUNK actions

export function fetchAllInternational(): ThunkAction {
  return (dispatch) => {
    dispatch(requestInternational())
    //Insertapi get all function below
    return INSERTFETCHALLFUNCTIONFROMAPI()
      .then((data) => {
        console.log('THUNK - great job fetching all internationals')
        dispatch(getInternational(data))
      })
      .catch((err) => {
        return err.message
      })
  }
}

export function delOneInternational(id: number): ThunkAction {
  return (dispatch) => {
    //Insert api delete function below
    return APIDELINTERNATIONALFUNCTIONAPI(id)
      .then(() => {
        console.log('THUNK - international deleted:', id)
        dispatch(delInternational(id))
      })
      .catch((err) => {
        return err.message
      })
  }
}

export function addAnInternational(newData: User): ThunkAction {
  return (dispatch) => {
    dispatch(addInternational(newData))
    //Insertapi get all function below
    return INSERTFETCHALLFUNCTIONFROMAPI()
      .then((data) => {
        console.log('THUNK - great job fetching all internationals')
        dispatch(addInternational(data))
      })
      .catch((err) => {
        return err.message
      })
  }
}

export function updateAnInternational(id: number): ThunkAction {
  return console.log('THUNK - you have just updated: ', id)
}

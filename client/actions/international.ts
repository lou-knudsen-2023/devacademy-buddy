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
export type InternationlAction =
  | { type: typeof REQUEST_INTUSERS; payload: null }
  | { type: typeof GET_INTUSERS; payload: User[] }
  | { type: typeof ADD_INTUSERS; payload: User }
  | { type: typeof UPDATE_INTUSERS; payload: User }
  | { type: typeof DEL_INTUSERS; payload: User }
  | { type: typeof SHOW_ERROR; payload: string }

//action creators
export function requestIntUser(): InternationlAction {
  console.log('Action - request international data')
  return {
    type: REQUEST_INTUSERS,
    payload: null,
  }
}

export function getIntUser(alldata: User[]): InternationlAction {
  console.log('Action - received all international data')
  return {
    type: GET_INTUSERS,
    payload: alldata,
  }
}

export function addIntUser(addInternational: User): InternationlAction {
  console.log('Action - adding international', addInternational)

  return {
    type: ADD_INTUSERS,
    payload: addInternational,
  }
}

export function updateIntUser(id: number): InternationlAction {
  console.log('Action - updated international id number..', id)

  return {
    type: UPDATE_INTUSERS,
    payload: id,
  }
}

export function delIntUser(id: number): InternationlAction {
  console.log('Action - deleted international id number..', id)

  return {
    type: DEL_INTUSERS,
    payload: id,
  }
}

export function showError(errorMessage: string): InternationlAction {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

//THUNK actions

export function setInternationalThunk(): ThunkAction {
  return (dispatch) => {
    return getAllUsersAPI()
      .then((users) => {
        console.log('THUNK - great job fetching all internationals')
        const filterInternationals = (user: User) =>
          user.user_status !== 'local'
        const usersFilteredToInternationals = users.filter(filterInternationals)
        dispatch(getIntUser(usersFilteredToInternationals))
      })
      .catch((err) => {
        return err.message
      })
  }
}

export function delOneIntUser(id: number): ThunkAction {
  return (dispatch) => {
    //Insert api delete function below
    return delIntUser(id)
      .then(() => {
        console.log('THUNK - international deleted:', id)
        dispatch(delInternational(id))
      })
      .catch((err) => {
        return err.message
      })
  }
}

export function addAnIntUser(newData: User): ThunkAction {
  return (dispatch) => {
    dispatch(addIntUser(newData))
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

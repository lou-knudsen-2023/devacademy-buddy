import { useState, useEffect } from 'react'
import { User } from '../../models/Users'
import { getSingleUserAPI } from '../apis/apiClient'
import { getLocalThunk } from '../actions/local'
import { useAppDispatch, useAppSelector } from '../hooks'

export function AllProfiles() {

  // const dispatch = useAppDispatch()
  // const users = useAppSelector((state) => state.localReducer)
  // console.log(users)

  // const allUsers = () => {
  //   dispatch(getLocalThunk())
  // }

  // useEffect(() => {
  //   allUsers()
  // }, [])

  // return (
  //   <>
  //     <div className="testingUsers">
  //       <ul>
  //         {users.map((user) => (
  //           <li key={user.id}>
  //             Name: {user.first_name} Age: {user.age} Country of origin:{' '}
  //             {user.country_origin}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
    // </>
  )
}

export default AllProfiles

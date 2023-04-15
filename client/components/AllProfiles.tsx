import { useState, useEffect } from 'react'
import { User } from '../../models/Users'
import { getAllUsersAPI } from '../apis/apiClient'
import { setLocalThunk } from '../actions/local'
import { useAppDispatch, useAppSelector } from '../hooks'

export function AllProfiles() {
  // const [showUsers, setShowUsers] = useState(false)
  // const dispatch = useAppDispatch()
  // const data = useAppSelector((globalState) => globalState.subusers)

  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.localReducer)
  console.log(users)

  const allUsers = () => {
    dispatch(setLocalThunk())
  }

  useEffect(() => {
    allUsers()
  }, [])

  return (
    <>
      <div className="testingUsers">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Name: {user.first_name} Age: {user.age} Country of origin:{' '}
              {user.country_origin}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AllProfiles

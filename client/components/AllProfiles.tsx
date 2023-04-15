import { useState, useEffect } from 'react'
import { setLocalThunk } from '../actions/local'
import { useAppDispatch, useAppSelector } from '../hooks'
import { Link } from 'react-router-dom'

export default function AllProfiles() {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.localReducer)

  useEffect(() => {
    dispatch(setLocalThunk())
  }, [dispatch])

  const [showUsers, setShowUsers] = useState(false)

  const handleViewProfile = () => {
    setShowUsers(true)
    window.sessionStorage.setItem('showUsers', 'true')
  }

  useEffect(() => {
    const storedShowUsers = window.sessionStorage.getItem('showUsers')
    if (storedShowUsers) {
      setShowUsers(storedShowUsers === 'true')
    }
  }, [])

  return (
    <>
      <div className="testingUsers">
        {users.map((user) => (
          <div key={user.id}>
            {showUsers ? null : (
              <>
                <p>
                  Name: {user.first_name} Age: {user.age} Country of origin:{' '}
                  {user.country_origin}
                </p>
                <div>
                  <Link to={`/${user.id}`} onClick={handleViewProfile}>
                    View Profile
                  </Link>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

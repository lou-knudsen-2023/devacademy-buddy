import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { getLocalThunk, delLocalThunk } from '../actions/local'
import { useParams, useNavigate } from 'react-router-dom'
import EditProfileForm from './EditProfileForm'
import { User } from '../../models/Users'

export default function SingleProfilePage() {
  const { loginWithRedirect } = useAuth0()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const userId = Number(useParams().id)

  const userData: User[] = useAppSelector((store) => store.localReducer)
  const user = userData.find((art) => art.id === userId)

  useEffect(() => {
    dispatch(getLocalThunk(userId))
  }, [dispatch, userId])

  const handleClick = (id: number) => {
    dispatch(delLocalThunk(id))
    navigate('/')
  }

  const [editMode, setEditMode] = useState(false)

  const handleEdit = () => {
    setEditMode(!editMode) // Toggle the value of editMode
  }

  return (
    <>
      <div>
        <div>
          <div className="image-container">
            <img src={user?.profile_img} alt={user?.user_name} />
          </div>

          <div className="main-title">
            <h2 className="title">
              {user?.first_name} {user?.last_name}
            </h2>
          </div>

          <div className="content-container">
            <IfAuthenticated>
              {/* authenticated and is own profile options */}
              {/* <button className="sml-button" onClick={handleEditClick}>Edit</button> */}
              {/* <div><Link to={`/buddy${id}`}>Edit</Link></div> */}

              {/* <button className="red-button" onClick={handleDelClick}>Delete</button> */}
            </IfAuthenticated>

            <div className="content">
              <p>About me: {user?.description}</p>
            </div>

            <div className="content">
              <p>Willing to share: </p>
              <ol>
                <li>{user?.sharing_one}</li>
                <li>{user?.sharing_two}</li>
                <li>{user?.sharing_three}</li>
              </ol>
            </div>

            <div className="content">
              <IfAuthenticated>
                <p>You can contact me on: </p>
                <p>{user?.email}</p>
              </IfAuthenticated>

              <IfNotAuthenticated>
                <button className="button" onClick={() => loginWithRedirect()}>
                  Please log in to view details
                </button>
              </IfNotAuthenticated>
            </div>
       
            <div>
          <button onClick={() => handleClick(userId)}>Delete</button>
          <button onClick={handleEdit}>{editMode ? 'Close' : 'Edit'}</button>
          {editMode && <EditProfileForm initialData={user ?? null} id={userId} />}
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

// const { loginWithRedirect } = useAuth0()
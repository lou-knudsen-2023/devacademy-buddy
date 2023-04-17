import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate, useParams } from 'react-router-dom'
import { ChangeEvent } from 'react'
import { delLocalThunk } from '../actions/local'
import { useState, useEffect } from 'react'
import { useAppDispatch } from '../hooks'
import { User } from '../../models/Users'
import axios from 'axios'
import EditProfileForm from './EditProfileForm'


//profile confirmation page
//profile image, delete button, edit button, description section,
// ordered list items for sharing. authenticated option for showing contact number.
//
export default function SingleProfile() {
  const { loginWithRedirect } = useAuth0()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const id = Number(useParams().id)

  const [user, setUser] = useState<User | null>(null)
  const [editData, setNewData] = useState()

  useEffect(() => {
    axios
      .get(`/api/v1/buddy/${id}`)
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }, [dispatch, id])

  const handleClick = (id: number) => {
    dispatch(delLocalThunk(id))
    navigate('/')
  }
  // const handleEditClick = (evt:ChangeEvent<HTMLInputElement>) => {
  //   evt.preventDefault()
  //   console.log('profile edit button clicked')
  //   setNewData({...editData, [evt.target.name]: evt.target.value })
  // }

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
              <button onClick={() => handleClick(id)}>Delete</button>
              <EditProfileForm initialData={user} id={id} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

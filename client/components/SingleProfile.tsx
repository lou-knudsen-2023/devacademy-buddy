import { User } from '../../models/Users'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, FormEvent, HtmlHTMLAttributes } from 'react'
import { useState } from 'react'
import EditProfileForm from './EditProfileForm'

interface Props {
  newPropsKey: User
}





//profile confirmation page
//profile image, delete button, edit button, description section, 
// ordered list items for sharing. authenticated option for showing contact number.
//
export default function SingleProfile(props: Props) {

  const { loginWithRedirect } = useAuth0()
  const navigate = useNavigate()

  // const [isShownEdit, setIsShownEdit] = useState(false)
  const [editData, setNewData] = useState(props as Props)

  
    const handleEditClick = (evt:ChangeEvent<HTMLInputElement>) => {
      evt.preventDefault()
      console.log('profile edit button clicked')
      setNewData({...editData, [evt.target.name]: evt.target.value })
    }



  return (
    <>

      <div>
        <div>
          <div className="image-container">
            <img src={IMAGE} alt="A photo of"{USERNAME} />
          </div>

          <div className="main-title">
            <h2 className="title">{USERNAME}</h2>
          </div>

          <div className="content-container">

              <IfAuthenticated>
              {/* authenticated and is own profile options */}
              <button className="sml-button" onClick={handleEditClick}>Edit</button>
              {/* <div><Link to={`/buddy${id}`}>Edit</Link></div> */}
             
              {/* <button className="red-button" onClick={handleDelClick}>Delete</button> */}
              </IfAuthenticated>

            <div className="content">
              <p>About me: {DESCRIPTION}</p>
            </div>

            <div className="content">
              <p>Willing to share: </p>
              <ol>
                <li>{SHARINGONE}</li>
                <li>{SHARINGTWO}</li>
                <li>{SHARINGTHREE}</li>
              </ol>
            </div>

            <div className="content">
              <IfAuthenticated>
              <p>You can contact me on: </p>
                <p>{EMAIL}</p>
              </IfAuthenticated>

              <IfNotAuthenticated>
                <button
                  className="button"
                  onClick={() => loginWithRedirect()}>
                  Please log in to view details
                </button>
              </IfNotAuthenticated>
            </div>
            
            <div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

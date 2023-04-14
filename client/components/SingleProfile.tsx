// may need to update interface based on convos
import { User } from '../../models/Users'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import { useAuth0 } from '@auth0/auth0-react'
interface Props {
  newPropsKey: User
}

//profile confirmation page
export default function SingleProfile(props: Props) {
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
              <button className="sml-button">
                {/* onclick code here */}
                Edit
              </button>

              <button className="red-button">
                {/* onclick code here */}
                Delete Profile
              </button>  
              </IfAuthenticated>

            <div className="content">
              <p>
              About me: {DESCRIPTION}
              </p>
            </div>

            <div className="content">
              Willing to share: 
              <ol>
                <li>{SHARINGONE}</li>
                <li>{SHARINGTWO}</li>
                <li>{SHARINGTHREE}</li>
              </ol>
            </div>

            <div className="content">
              <IfAuthenticated>
              <p>
                You can contact me on: 
              </p>
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
              <p></p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

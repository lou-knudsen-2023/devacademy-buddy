// may need to update interface based on convos
import { User } from '../../common/interface'
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
          <div className="imageContainer">
            <img src={XXXXX} alt={XXXXX} />
          </div>
        </div>
      </div>
    </>
  )
}

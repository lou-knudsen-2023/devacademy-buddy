import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Login from './Login'
import Home from './Home'
import SingleProfilePage from './singleTester'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import AllProfiles from './AllProfiles'
import AddMethodForm from './formTesting'
import { useAppDispatch, useAppSelector } from '../hooks'
import { User } from '../../models/Users'
import { useEffect } from 'react'
// import { User } from '@auth0/auth0-react'

function App() {
  return (
    <>
      <AllProfiles />
      {/* <div className="container has-text-centered">
        <Header />
        <div>
          <IfNotAuthenticated>
            <Login />
          </IfNotAuthenticated>

          <IfAuthenticated>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </IfAuthenticated>
        </div>
      </div> */}
      <Routes>
        {/* <Route path="/" element={<AllProfiles />} /> */}
        <Route path="/:id" element={<SingleProfilePage />} />
      </Routes>
    </>
  )
}

export default App

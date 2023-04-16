import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Login from './Login'
import Home from './Home'
import SingleProfilePage from './singleTester'
import { useAppDispatch, useAppSelector } from '../hooks'
import { User } from '../../models/Users'
import { useEffect } from 'react'
// import { User } from '@auth0/auth0-react'
import Footer from './Footer'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import AllProfiles from './AllProfiles'
import AddMethodForm from './formTesting'
// scopedCSSBaseline allows us to apply Material UI to child components only (good for partial integration of material)
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline'

function App() {
  return (
    <>
      <ScopedCssBaseline>
        <Nav />
        <Routes>
          <Route path="/" element={<AllProfiles />} />
          <Route path="/:id" element={<SingleProfilePage />} />
        </Routes>
        <Footer />
      </ScopedCssBaseline>
    </>
  )
}

export default App

{
  /* <AllProfiles /> */
}
{
  /* <AddMethodForm /> */
}
{
  /* <div className="container has-text-centered">
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
        </div> */
}

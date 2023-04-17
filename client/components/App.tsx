import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import SingleProfilePage from './singleTester'
import SingleProfile from './SingleProfile'
import CreateProfileForm from './CreateProfileForm'
import { useAppSelector } from '../hooks'
// import AllProfiles from './AllProfiles'
import Footer from './Footer'
// import Header from './Header'
// import Login from './Login'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import ScopedCssBaseline from '@mui/material/ScopedCssBaseline'

function App() {
  return (
    <>
      <ScopedCssBaseline>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SingleProfile />} />
          <Route path="/create-profile" element={<CreateProfileForm />} />
          {/* <Route path='' element={<AllProfiles />} */}
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

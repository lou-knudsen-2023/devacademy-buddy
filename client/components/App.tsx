import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
// import Header from './Header'
// import Login from './Login'
// import Home from './Home'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import SingleProfilePage from './singleTester'
import Footer from './Footer'
import AllProfiles from './AllProfiles'
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

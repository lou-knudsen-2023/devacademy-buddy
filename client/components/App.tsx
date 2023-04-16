import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Login from './Login'
import Home from './Home'
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
        <AllProfiles />
        <AddMethodForm />
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
        <Footer />
      </ScopedCssBaseline>
    </>
  )
}

export default App

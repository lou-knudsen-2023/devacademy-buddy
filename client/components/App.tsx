import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Home from './Home'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import AllProfiles from './AllProfiles'
import AddMethodForm from './formTesting'

function App() {
  return (
    <>
      <div>Hi this page is working</div>
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
    </>
  )
}

export default App

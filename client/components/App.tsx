import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import SingleProfile from './SingleProfile'
import CreateProfileForm from './CreateProfileForm'
import AllProfiles from './AllProfiles'
import Footer from './Footer'

import CssBaseline from '@mui/material/ScopedCssBaseline'
import { useAppDispatch } from '../hooks'
import { setLocalThunk } from '../actions/local'
import { useEffect } from 'react'

import { ThemeProvider } from '@emotion/react'
import { appTheme } from '../styles/theme'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setLocalThunk())
  }, [dispatch])

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Nav />
        {/* <CreateProfileForm /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SingleProfile />} />
          <Route path="/create-profile" element={<CreateProfileForm />} />
          <Route path="/all-profiles/local" element={<AllProfiles />} />
          <Route path="/all-profiles/international" element={<AllProfiles />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks'
import { styled } from '@mui/material/styles'
import { useEffect } from 'react'

import { Typography, AppBar, Toolbar, Box, Button } from '../styles/imports'
import { appTheme } from '../styles/theme'

export default function Nav() {
  const { logout, loginWithRedirect, user } = useAuth0()
  const userInBothDB = useAppSelector((redux) =>
    redux.localReducer.find((person) => person.auth_id === user?.sub)
  )

  const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'whitesmoke',
    fontSize: '0.9em',
  })

  function handleScroll() {
    const customAppBar = document.querySelector('.custom-appbar')
    if (customAppBar) {
      if (window.scrollY > 0) {
        customAppBar.classList.add('scroll')
      } else {
        customAppBar.classList.remove('scroll')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AppBar variant="outlined" position="relative" className="custom-appbar">
      <Toolbar sx={{ justifyContent: 'space-between', margin: ' 0 1em' }}>
        <Box>
          <StyledLink to="/">
            <Typography
              variant="h3"
              sx={{
                fontSize: '1.8rem',
                fontWeight: '900',
                letterSpacing: '0.05em',
              }}
              className="logo"
            >
              Buddy
            </Typography>
          </StyledLink>
        </Box>
        <Typography
          variant="h6"
          color="inherit"
          align="right"
          style={{
            display: 'flex',
            letterSpacing: '0.01em',
            fontWeight: '400',
          }}
          noWrap
        >
          <IfAuthenticated>
            <Box sx={{ mx: 0 }}>
              <StyledLink to="/all-profiles/local" className="label">
                Locals
              </StyledLink>
            </Box>
            <Box sx={{ mx: 3 }}>
              <StyledLink to="/all-profiles/international" className="label">
                Internationals
              </StyledLink>
            </Box>
            {userInBothDB ? (
              <Box sx={{ mx: 1 }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  component={Link}
                  to={`/${userInBothDB?.id}`}
                  className="button-style"
                >
                  My Profile
                </Button>
              </Box>
            ) : (
              <Box sx={{ mx: 1 }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  component={Link}
                  to="/create-profile"
                  className="button-style"
                >
                  Create Profile
                </Button>
              </Box>
            )}
            <Box sx={{ mx: 1 }}>
              <Button
                variant="outlined"
                color="secondary"
                className="button-style"
                onClick={() => logout()}
              >
                Logout
              </Button>
            </Box>
          </IfAuthenticated>

          <IfNotAuthenticated>
            <Box sx={{ mx: 2 }}>
              <StyledLink
                to="/"
                onClick={() => loginWithRedirect()}
                className="label"
              >
                Locals
              </StyledLink>
            </Box>
            <Box sx={{ mx: 2 }}>
              <StyledLink
                to="/"
                onClick={() => loginWithRedirect()}
                className="label"
              >
                Internationals
              </StyledLink>
            </Box>
            <Box sx={{ mx: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                className="login"
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
            </Box>
          </IfNotAuthenticated>
          {/* Buddy Navigation bar */}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

//

//NOTES FOR ESTRELLA RE: MATERIAL UI
// addign in something
// ThemeProvider is the main wrapper that allows us to manipulate the standard theme for Material UI. This is on every component as the main wrap around
// AppBar is specifically for navigation https://mui.com/material-ui/react-app-bar/
// ToolBar allows us to insert functionality into the app bar https://mui.com/material-ui/api/toolbar/
// Typography is anything content/words (h1 etc). There are specific ones that can be found here: https://mui.com/material-ui/customization/typography/
// there is a cool icons package that I downloaded. To check out others available: https://mui.com/material-ui/material-icons/

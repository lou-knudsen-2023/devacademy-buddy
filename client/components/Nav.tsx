import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks'
import { styled } from '@mui/material/styles'

import { Typography, AppBar, Toolbar, Box, Button } from '../styles/imports'
import { CameraIcon } from '../styles/imports'
import { appTheme } from '../styles/theme'

export default function Nav() {
  const { logout, loginWithRedirect, user } = useAuth0()
  const userInBothDB = useAppSelector((redux) =>
    redux.localReducer.find((person) => person.auth_id === user?.sub)
  )

  const StyledLink = styled(Link)({
    textDecoration: 'none',
  })

  return (
    <AppBar className={appTheme.palette.primary.main} position="relative">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <StyledLink to="/">
          <Typography variant="h3">Buddy</Typography>
        </StyledLink>
        <Typography
          variant="h6"
          color="inherit"
          align="right"
          style={{ display: 'flex' }}
          noWrap
        >
          <IfAuthenticated>
            <Box sx={{ mx: 1 }}>
              <StyledLink to="/all-profiles/local">Locals</StyledLink>
            </Box>
            <Box sx={{ mx: 2 }}>
              <StyledLink to="/all-profiles/international">
                Internationals
              </StyledLink>
            </Box>
            {userInBothDB ? (
              <Box sx={{ mx: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to={`/${userInBothDB?.id}`}
                >
                  My Profile
                </Button>
              </Box>
            ) : (
              <Box sx={{ mx: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to="/create-profile"
                >
                  Create Profile
                </Button>
              </Box>
            )}
            <Box sx={{ mx: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => logout()}
              >
                Logout
              </Button>
            </Box>
          </IfAuthenticated>

          <IfNotAuthenticated>
            <Box sx={{ mx: 2 }}>
              <StyledLink to="/" onClick={() => loginWithRedirect()}>
                Locals
              </StyledLink>
            </Box>
            <Box sx={{ mx: 2 }}>
              <StyledLink to="/" onClick={() => loginWithRedirect()}>
                Internationals
              </StyledLink>
            </Box>
            <Box sx={{ mx: 2 }}>
              <Button
                variant="contained"
                color="secondary"
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

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

import { Typography, AppBar, Toolbar, Box, Button } from '../../utils/mui'
import { CameraIcon } from '../../utils/mui'
import { createTheme, ThemeProvider } from '../../utils/mui'
import { Link } from 'react-router-dom'

const theme = createTheme()

export default function Nav() {
  const { logout, loginWithRedirect, user } = useAuth0()

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/">
            <CameraIcon sx={{ mr: 2 }} />
          </Link>
          <Typography
            variant="h6"
            color="inherit"
            align="right"
            style={{ display: 'flex' }}
            noWrap
          >
            <IfAuthenticated>
              <Box sx={{ mx: 1 }}>
                <Link to="/allprofiles">Locals</Link>
              </Box>
              <Box sx={{ mx: 2 }}>
                <Link to="/allprofiles">Internationals</Link>
              </Box>
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
                <Link to="/locals" onClick={() => loginWithRedirect()}>
                  Locals
                </Link>
              </Box>
              <Box sx={{ mx: 2 }}>
                <Link to="/internationals" onClick={() => loginWithRedirect()}>
                  Internationals
                </Link>
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
    </ThemeProvider>
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

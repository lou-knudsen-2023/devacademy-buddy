import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import { Typography, AppBar, Toolbar, Box, Button } from '../../utils/mui'
import { CameraIcon } from '../../utils/mui'
import { appTheme } from '../../utils/mui'

export default function Nav() {
  const { logout, loginWithRedirect, user } = useAuth0()

  return (
    <AppBar className={appTheme.palette.primary.main} position="relative">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/">
          <CameraIcon color="secondary" sx={{ mr: 2 }} />
        </Link>
        <Typography
          variant="h6"
          color="inherit"
          align="right"
          style={{ display: 'flex' }}
          noWrap
        >
          <IfAuthenticated>
            <Box sx={{ mx: 2 }}>
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
              <Link to="/" onClick={() => loginWithRedirect()}>
                Locals
              </Link>
            </Box>
            <Box sx={{ mx: 2 }}>
              <Link to="/" onClick={() => loginWithRedirect()}>
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

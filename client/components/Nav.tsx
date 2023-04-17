import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CameraIcon from '@mui/icons-material/PhotoCamera'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { Typography, AppBar, Toolbar } from '../../utils/mui'
import { CameraIcon } from '../../utils/mui'
import { createTheme, ThemeProvider } from '../../utils/mui'
import { Link } from 'react-router-dom'
const theme = createTheme()

export default function Nav() {
  const { logout, loginWithRedirect, user } = useAuth0()

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar>
          {/* For the code example below: SX stands for shortcut which allows you to use custom variants. mr is margin right */}
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" align="right" noWrap>
            Buddy bar
            <IfAuthenticated>
              <Link to="/locals">Locals </Link>
              <Link to="/internationals">Internationals</Link>

              <button onClick={() => logout()}>Logout</button>
            </IfAuthenticated>
            <IfNotAuthenticated>
              <Link to="/locals" onClick={() => loginWithRedirect()}>
                Locals{' '}
              </Link>
              <Link to="/internationals" onClick={() => loginWithRedirect()}>
                Internationals
              </Link>
              <button onClick={() => loginWithRedirect()}>Login</button>
            </IfNotAuthenticated>
            <Link to="/" className="">
              Buddy Navigation bar
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

//

//NOTES FOR ESTRELLA RE: MATERIAL UI
// ThemeProvider is the main wrapper that allows us to manipulate the standard theme for Material UI. This is on every component as the main wrap around
// AppBar is specifically for navigation https://mui.com/material-ui/react-app-bar/
// ToolBar allows us to insert functionality into the app bar https://mui.com/material-ui/api/toolbar/
// Typography is anything content/words (h1 etc). There are specific ones that can be found here: https://mui.com/material-ui/customization/typography/
// there is a cool icons package that I downloaded. To check out others available: https://mui.com/material-ui/material-icons/

import { Typography, AppBar, Toolbar } from '../../utils/mui'
import { CameraIcon } from '../../utils/mui'
import { createTheme, ThemeProvider } from '../../utils/mui'
import { Link } from 'react-router-dom'
const theme = createTheme()

export default function Nav() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" align="right" noWrap>
          <Link to="/" className="">Buddy Navigation bar</Link>
            
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

//NOTES FOR ESTRELLA RE: MATERIAL UI
// ThemeProvider is the main wrapper that allows us to manipulate the standard theme for Material UI. This is on every component as the main wrap around
// AppBar is specifically for navigation https://mui.com/material-ui/react-app-bar/
// ToolBar allows us to insert functionality into the app bar https://mui.com/material-ui/api/toolbar/
// Typography is anything content/words (h1 etc). There are specific ones that can be found here: https://mui.com/material-ui/customization/typography/
// there is a cool icons package that I downloaded. To check out others available: https://mui.com/material-ui/material-icons/

// **Styles**
import { createTheme, ThemeProvider } from '@mui/material/styles'

// **Core**
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

// **Icons**
import CameraIcon from '@mui/icons-material/PhotoCamera'

// **Functions**
export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://buddy.co.nz/">
        buddy.co.nz
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

// **EXPORTS**
export { Typography, AppBar, Toolbar, Box, Link }
export { CameraIcon }
export { createTheme, ThemeProvider }

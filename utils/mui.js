// **Styles**
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles'

// **Core**
import {
  Typography,
  AppBar,
  Toolbar,
  Link,
  Box,
  Stack,
  Button,
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material'

// **Icons**
import CameraIcon from '@mui/icons-material/PhotoCamera'

// --------------------------//
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

// --------------------------//
// **EXPORTS CORE**
export {
  Typography,
  AppBar,
  Toolbar,
  Box,
  Link,
  Stack,
  Button,
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
}
// **EXPORTS STYLES**
export { createTheme, ThemeProvider, responsiveFontSizes }
// **EXPORTS ICONS**
export { CameraIcon }

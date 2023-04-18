// **Styles**
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles'

import { styled } from '@mui/system'

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
  CardActionArea,
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

export const useStyles = styled({
  profileCard: {
    width: '100%',
    minHeight: 350,
    margin: 10,
    padding: 50,
    position: 'relative',
  },
})

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#1C54B2',
      middle: '#2979FF',
      light: '#5393FF',
    },
    secondary: {
      main: '#B28900',
      middle: '#FFC400',
      light: '#FFCF32',
    },
    tertiary: {
      main: '#00695F',
      middle: '#009688',
      light: '#33AB9F',
    },
    bodyColor: {
      offWhite: '#FCFBF5',
    },
  },
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
  },
})

// theme = responsiveFontSizes(theme)

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
  CardActionArea,
}
// **EXPORTS STYLES**
export { createTheme, ThemeProvider, responsiveFontSizes }
// **EXPORTS ICONS**
export { CameraIcon }

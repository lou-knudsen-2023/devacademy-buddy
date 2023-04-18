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

//styles still not working
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
      dark: '#1C54B2',
      main: '#2979FF',
      light: '#5393FF',
      contrastText: '#fefefe',
    },
    secondary: {
      dark: '#B28900',
      main: '#FFC400',
      light: '#FFCF32',
      contrastText: '#212121',
    },
    tertiary: {
      main: '#00695F',
      middle: '#009688',
      light: '#33AB9F',
      contrastText: '#',
    },
    background: {
      default: '#FCFBF5',
    },
  },
  typography: {
    fontFamily: 'Helvetica',
    color: 'black',
    button: {
      fontSize: '1rem',
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
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

// THEME VARIABLES
// .palette
// .typography
// .spacing
// .breakpoints
// .zIndex
// .transitions
// .components

// -----EXAMPLE FOR components-----
// const theme = createTheme({
//   components: {
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: '#333',
//           boxShadow: 'none',
//         },
//       },
//     },
//   },
// });

// const theme = createTheme({
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           marginTop: '16px',
//         },
//         input: {
//           fontSize: '1rem',
//         },
//         label: {
//           fontSize: '0.9rem',
//         },
//       },
//     },
//   },
// });

// const theme = createTheme({
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           fontSize: '1rem',
//           fontWeight: 'bold',
//         },
//         contained: {
//           boxShadow: 'none',
//         },
//         outlined: {
//           borderWidth: '2px',
//         },
//       },
//     },
//   },
// });

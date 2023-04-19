import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles'

// **Core**
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
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
  createTheme,
} from '@mui/material'

// **Icons**
import CameraIcon from '@mui/icons-material/PhotoCamera'

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
  createTheme,
}
// **EXPORTS STYLES**
export { ThemeProvider, responsiveFontSizes }
// **EXPORTS ICONS**
export { CameraIcon }
// **EXPORTS SYSTEM**

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

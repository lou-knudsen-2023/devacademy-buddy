import {
  createTheme,
  // responsiveFontSizes,
} from '@mui/material/styles'

// import { Palette } from '../../models/Users'

export const appTheme = createTheme({
  palette: {
    primary: {
      dark: '#1C54B2',
      main: '#2979FF',
      // main: '#f9bc9b',
      light: '#5393FF',
      contrastText: '#585353',
    },
    secondary: {
      dark: '#B28900',
      // main: '#FFC400',
      main: '#ee8460',
      light: '#FFCF32',
      contrastText: '#585353',
    },

    error: {
      dark: '#B28900',
      main: '#FFC400',
      light: '#FFCF32',
      contrastText: '#212121',
    },

    success: {
      dark: '#00695F',
      main: '#009688',
      light: '#33AB9F',
      contrastText: '#fefefe',
    },

    // grey has a bunch of options you can see here https://mui.com/material-ui/customization/default-theme/

    background: {
      default: '#FCFBF5',
    },
  },
  typography: {
    fontFamily: 'Nunito, sans-serif',
    button: {
      fontSize: '0.8rem',
    },
    subtitle2: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: 14,
    },
    body1: {
      fontSize: 15,
      fontWeight: 300,
    },
  },
})

// theme = responsiveFontSizes(theme)

// THEME VARIABLES
// .palette
// .typography
// .spacing
// .breakpoints
// .zIndex
// .transitions
// .components

//TO DO
// - complete theme
// - set up interface
// - import interface into themes

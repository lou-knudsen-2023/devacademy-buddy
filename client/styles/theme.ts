import {
  createTheme,
  // responsiveFontSizes,
} from '@mui/material/styles'

import { Palette } from '../../models/Users'

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

    // NEED TO SIT WITH EMILY TO SET UP THEME!!!!
    // tertiary: {
    //   main: '#00695F',
    //   middle: '#009688',
    //   light: '#33AB9F',
    //   contrastText: '#fefefe',
    // },

    background: {
      default: '#FCFBF5',
    },
  },
  typography: {
    fontFamily: 'Helvetica',
    // color: 'black',
    // align: 'center',
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

import Typography from '@mui/material/Typography'
// import Container from '@mui/material/Container';
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function Copyright() {
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

const theme = createTheme()

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          FOOTER
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Ado, Emily, Estrella, Jen, Josh and Lou
        </Typography>
        {/* copyright function inserted below */}
        <Copyright />
      </Box>
    </ThemeProvider>
  )
}

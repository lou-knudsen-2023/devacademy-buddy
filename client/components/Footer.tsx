import { Typography, Box, Link } from '../styles/imports'

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

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        {/* FOOTER */}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Ado, Emily, Estrella, Jen, Josh and Lou
      </Typography>
      <Copyright />
    </Box>
  )
}

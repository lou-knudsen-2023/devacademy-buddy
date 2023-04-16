import { Typography, Box } from '../../utils/mui'
import { createTheme, ThemeProvider } from '../../utils/mui'
import Copyright from '../../utils/mui'

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
        <Copyright />
      </Box>
    </ThemeProvider>
  )
}

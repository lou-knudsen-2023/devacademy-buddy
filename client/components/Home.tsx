import { BorderAll } from '@mui/icons-material'
import { grey } from '@mui/material/colors'
import { Typography, Box, Button, Stack, Container } from '../../utils/mui'
import { borders } from '@mui/system'
import AllProfiles from './AllProfiles'

function Home() {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Buddy
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            "Connecting people from abroad with local Wellingtonians"
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">View Locals</Button>
            <Button variant="outlined">View Internationals</Button>
          </Stack>
        </Container>
      </Box>

      <Box
        id="testimonial"
        sx={{
          // bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: '#FFF8DC',
            borderColor: 'grey.500',
            borderRadius: '16px',
            pt: 8,
            pb: 6,
          }}
        >
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Buddy
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            "Connecting people from abroad with local Wellingtonians"
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default Home

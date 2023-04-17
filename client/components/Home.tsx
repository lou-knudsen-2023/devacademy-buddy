import { Typography, Box, Button, Stack, Container } from '../../utils/mui'
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            cursus ut sapien molestie laoreet. Nam venenatis mauris ac purus
            viverra, in pulvinar libero ullamcorper. Cras dapibus leo varius
            efficitur maximus. Donec vehicula lacus eu justo auctor, sit amet
            fringilla dui rutrum. Vestibulum vestibulum justo quis felis
            dignissim, venenatis sagittis nulla faucibus. Nam porttitor a justo
            nec volutpat. Praesent diam leo, fermentum et metus non,
            pellentesque convallis massa.
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
      <AllProfiles />
    </>
  )
}

export default Home

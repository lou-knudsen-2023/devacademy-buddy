import { useState, useEffect } from 'react'
import { setLocalThunk } from '../actions/local'
import { useAppDispatch, useAppSelector } from '../hooks'
import { Link } from 'react-router-dom'

import { Typography } from '@mui/material'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
// import PlaceholderImage from '../../server/public/placeholder-image.png'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export function AllProfiles() {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.localReducer)

  useEffect(() => {
    dispatch(setLocalThunk())
  }, [dispatch])

  const [showUsers, setShowUsers] = useState(false)

  const handleViewProfile = () => {
    setShowUsers(true)
    window.sessionStorage.setItem('showUsers', 'true')
  }

  useEffect(() => {
    const storedShowUsers = window.sessionStorage.getItem('showUsers')
    if (storedShowUsers) {
      setShowUsers(storedShowUsers === 'true')
    }
  }, [])

  // SCSS CODE BELOW
  //placeholder image below not working - needs attention
  const PlaceholderImage = '../../server/public/placeholder-image.png'

  let theme = createTheme({
    typography: {
      subtitle1: {
        fontSize: 12,
      },
      body1: {
        fontWeight: 500,
        //   fontStyle: 'italic',
      },
    },
  })

  theme = responsiveFontSizes(theme)

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* HERO TITLE AND MISSION STATEMENT - TO BE OWN COMPONENT */}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse cursus ut sapien molestie laoreet. Nam venenatis
              mauris ac purus viverra, in pulvinar libero ullamcorper. Cras
              dapibus leo varius efficitur maximus. Donec vehicula lacus eu
              justo auctor, sit amet fringilla dui rutrum. Vestibulum vestibulum
              justo quis felis dignissim, venenatis sagittis nulla faucibus. Nam
              porttitor a justo nec volutpat. Praesent diam leo, fermentum et
              metus non, pellentesque convallis massa.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* a few button options below if you want to try */}
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        {/* End hero unit */}

        {/* CARDS FOR GALLARY - THIS COMPONENT */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {users.map((user) => (
              <Grid item key={user.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={PlaceholderImage}
                    alt="placeholder image"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h5"
                      color="primary"
                      align="center"
                      gutterBottom
                    >
                      {user.first_name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      align="center"
                      gutterBottom
                    >
                      Age: {user.age}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="secondary"
                      align="center"
                      gutterBottom
                    >
                      {user.country_origin}
                    </Typography>
                  </CardContent>
                  <CardActions
                    disableSpacing
                    sx={{
                      alignSelf: 'stretch',
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-start',
                      // 👇 Edit padding to further adjust position
                      // pr: 4,
                      p: 2,
                    }}
                  >
                    {/* <Button size="small">View Profile</Button> */}
                    <Link to={`/${user.id}`} onClick={handleViewProfile}>
                    View Profile
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default AllProfiles

// FROM THE FUNCTION ABOVE - NOT SURE IF WE NEED IT ANYMORE
// const [showUsers, setShowUsers] = useState(false)
// const dispatch = useAppDispatch()
// const data = useAppSelector((globalState) => globalState.subusers)
{
  /* <Link to={`/${user.id}`} onClick={handleViewProfile}>
View Profile
</Link> */

}

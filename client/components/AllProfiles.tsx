import { useState, useEffect } from 'react'
import { setLocalThunk } from '../actions/local'
import { useAppDispatch, useAppSelector } from '../hooks'
import { Link } from 'react-router-dom'

import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '../../utils/mui'
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '../../utils/mui'

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

  //placeholder image below not working - needs attention
  const PlaceholderImage = '../../server/public/placeholder-image.png'

  let theme = createTheme({
    typography: {
      subtitle1: {
        fontSize: 12,
      },
      body1: {
        fontWeight: 500,
      },
    },
  })

  theme = responsiveFontSizes(theme)

  return (
    <>
      <ThemeProvider theme={theme}>
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
                      p: 2,
                    }}
                  >
                    <Button size="small">
                      <Link to={`/${user.id}`} onClick={handleViewProfile}>
                        View Profile
                      </Link>
                    </Button>
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

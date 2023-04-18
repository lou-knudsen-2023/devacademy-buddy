import { useState, useEffect } from 'react'
import { setLocalThunk } from '../actions/local'
import { useAppDispatch, useAppSelector } from '../hooks'
import { AuthIdDoesNotMatch } from './Authenticated'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

import { User } from '../../models/Users'

import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '../styles/imports'

export function AllProfiles() {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.localReducer)

  useEffect(() => {
    dispatch(setLocalThunk())
  }, [dispatch])

  const [showUsers, setShowUsers] = useState(false)

  // const userData: User[] = useAppSelector((store) => store.localReducer)
  // const userId = Number(useParams().id)
  // const userProfile = userData.find((person) => person.id === userId)

  const urlPath = useLocation().pathname
  const isLocal = urlPath.indexOf('local') !== -1

  const navigate = useNavigate()

  const handleViewProfile = () => {
    setShowUsers(true)
  }

  const filteredUsers = isLocal
    ? users.filter((user) => user.user_status === 'local')
    : users.filter((user) => user.user_status === 'international')

  return (
    <>

        <Container sx={{ py: 8 }} maxWidth="md">
          <Button
            onClick={() => {
              navigate(`/all-profiles/${isLocal ? 'international' : 'local'}`)
            }}
          >
            {isLocal ? 'Show International' : 'Show Local'}
          </Button>

          <Grid container spacing={4}>
            {filteredUsers.map((user) => (
              <AuthIdDoesNotMatch key={user.id} id={user?.auth_id}>
                <Grid item xs={12} sm={6} md={4}>
                  {showUsers ? null : (
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
                        image={`data:image/jpeg;base64,${user?.profile_img}`}
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
                  )}
                </Grid>
              </AuthIdDoesNotMatch>
            ))}
          </Grid>
        </Container>
    </>
  )
}

export default AllProfiles

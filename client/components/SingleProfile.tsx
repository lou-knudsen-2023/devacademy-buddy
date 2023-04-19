import { AuthIdMatches } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { getLocalThunk, delLocalThunk } from '../actions/local'
import { useParams, useNavigate } from 'react-router-dom'
import EditProfileForm from './EditProfileForm'

import { User } from '../../models/Users'

import { ThemeProvider } from '../styles/imports'
import {
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from '../styles/imports'

// import { useStyles } from '../../utils/mui'
import { StyledBox, StyledContentBox } from '../styles/styles'
import { fontSize } from '@mui/system'

export default function SingleProfilePage() {
  const { loginWithRedirect } = useAuth0()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { user } = useAuth0()
  console.log(user, 'testing the auth0 user to see what comes up')

  const userId = Number(useParams().id)

  const userData: User[] = useAppSelector((store) => store.localReducer)
  const userProfile = userData.find((person) => person.id === userId)

  const authIdMatches = user?.sub === userProfile?.auth_id

  useEffect(() => {
    dispatch(getLocalThunk(userId))
  }, [dispatch, userId])

  const handleClick = (id: number) => {
    dispatch(delLocalThunk(id))
    navigate('/')
  }

  const [editMode, setEditMode] = useState(false)

  const handleEdit = () => {
    setEditMode(!editMode) // Toggle the value of editMode
  }

  // const classes = useStyles

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Card
          // className={classes.profileCard}
          style={{
            width: '100%',
            minHeight: 350,
            margin: 10,
            // padding: 20,
            position: 'relative',
          }}
        >
          <CardContent>
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="text.primary"
            >
              {userProfile?.first_name} {userProfile?.last_name}
            </Typography>

            <CardMedia
              component="img"
              sx={{
                pt: '5.25%',
              }}
              image={`data:image/jpeg;base64,${userProfile?.profile_img}`}
              alt={userProfile?.user_name}
            />

            <StyledBox sx={{ py: 3, maxWidth: 'md', margin: 'auto' }}>
              <StyledContentBox sx={{ py: 8, maxWidth: 'md', margin: 'auto' }}>
                <Typography
                  component="h5"
                  variant="body1"
                  align="left"
                  color="text.primary"
                  sx={{ py: 2 }}
                >
                  <Typography variant="h5" sx={{ py: 3 }}>
                    <div>
                      {' '}
                      <strong>Name: </strong> {userProfile?.first_name}{' '}
                      {userProfile?.last_name}
                    </div>
                    <div>
                      {' '}
                      <strong>User name: </strong> {userProfile?.user_name}
                    </div>
                    <div>
                      {' '}
                      <strong>Age: </strong> {userProfile?.age}
                    </div>
                    <div>
                      {' '}
                      <strong>From: </strong>
                      {userProfile?.country_origin}, {userProfile?.city}
                    </div>
                    <div>
                      <strong>Main language: </strong>{' '}
                      {userProfile?.prim_language}
                    </div>
                    <div>
                      {' '}
                      <strong>English level: </strong>
                      {userProfile?.english_level}
                    </div>
                  </Typography>
                </Typography>

                <Typography
                  component="h5"
                  variant="h6"
                  align="left"
                  color="text.primary"
                >
                  <strong>About me: </strong> {userProfile?.description}
                </Typography>

                {/* ORDERED LIST FOR SHARING */}
                <Typography
                  component="h5"
                  variant="h6"
                  align="left"
                  color="text.primary"
                  gutterBottom
                >
                  <strong></strong>
                  <ul>
                    <li>{userProfile?.sharing_one}</li>
                    <li>{userProfile?.sharing_two}</li>
                    <li>{userProfile?.sharing_three}</li>
                  </ul>
                </Typography>
                <Typography
                  component="h5"
                  variant="h6"
                  align="left"
                  color="text.primary"
                >
                  You can contact me on:
                  <strong> {userProfile?.email}</strong>
                </Typography>
              </StyledContentBox>
            </StyledBox>
          </CardContent>

          {/* DELETE AND EDIT BUTTON */}
          <CardActions
            disableSpacing
            sx={{
              alignSelf: 'stretch',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              p: 2,
            }}
          >
            <AuthIdMatches id={userProfile?.auth_id}>
              <Button size="small" onClick={() => handleClick(userId)}>
                Delete
              </Button>

              <Button size="medium" variant="contained" onClick={handleEdit}>
                {editMode ? 'Close' : 'Edit'}
              </Button>
            </AuthIdMatches>
          </CardActions>
          {editMode && (
            <EditProfileForm initialData={userProfile ?? null} id={userId} />
          )}
        </Card>
      </Container>
    </>
  )
}

// DONE

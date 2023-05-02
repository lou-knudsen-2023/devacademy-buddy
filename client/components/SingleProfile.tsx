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
      <Container
        sx={{
          py: 1,
          display: 'flex',
          flexWrap: 'wrap',
          position: 'relative',
          marginTop: '150px',
        }}
        maxWidth="md"
      >
        <Card
          style={{
            width: '100%',
            margin: 10,
            padding: 2,
            border: '1px solid',
            borderRadius: '20px',
            borderColor: '#397fb54f',
            boxShadow: 'none',
          }}
          className="single-profile"
        >
          <CardContent
            sx={{
              position: 'relative',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <CardMedia
              component="img"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '20px',
                width: '800px',
                height: '500px',
                objectFit: 'cover',
                objectPosition: 'center center',
                overflow: 'hidden',
              }}
              image={`data:image/jpeg;base64,${userProfile?.profile_img}`}
              alt={userProfile?.user_name}
            />

            <StyledBox sx={{ py: 0, maxWidth: 'xs', margin: 'auto' }}>
              <StyledContentBox sx={{ py: 2, maxWidth: 'xs', margin: 'auto' }}>
                <Typography variant="h2" color="#10466f">
                  {userProfile?.first_name} {userProfile?.last_name}
                </Typography>
                <Typography align="left" color="#10466f" sx={{ py: 2 }}>
                  <Typography variant="h6" sx={{ py: 2 }}>
                    <div>
                      <strong>Username: </strong> {userProfile?.user_name}
                    </div>
                    <div>
                      <strong>Age: </strong> {userProfile?.age}
                    </div>
                    <div>
                      <strong>From: </strong>
                      {userProfile?.country_origin}, {userProfile?.city}
                    </div>
                    <div>
                      <strong>Main language: </strong>
                      {userProfile?.prim_language}
                    </div>
                    <div>
                      <strong>English level: </strong>
                      {userProfile?.english_level}
                    </div>
                  </Typography>
                </Typography>

                <Typography
                  component="h5"
                  variant="h6"
                  align="left"
                  color="#10466f"
                >
                  <strong>About me: </strong> {userProfile?.description}
                </Typography>

                {/* ORDERED LIST FOR SHARING */}
                <Typography
                  component="h5"
                  variant="h6"
                  align="left"
                  color="#10466f"
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
                  color="#10466f"
                >
                  You can contact me on:
                  <strong> {userProfile?.email}</strong>
                </Typography>
              </StyledContentBox>
            </StyledBox>
          </CardContent>

          {/* DELETE AND EDIT BUTTON */}
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              p: 2,
            }}
          >
            <AuthIdMatches id={userProfile?.auth_id}>
              <Button
                size="large"
                variant="outlined"
                onClick={() => handleClick(userId)}
                className="button-style"
                sx={{ fontSize: '15px !important' }}
              >
                Delete
              </Button>

              <Button
                size="large"
                variant="contained"
                onClick={handleEdit}
                className="login"
                sx={{ fontSize: '15px !important' }}
              >
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

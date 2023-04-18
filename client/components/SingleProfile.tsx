import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
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

export default function SingleProfilePage() {
  const { loginWithRedirect } = useAuth0()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const userId = Number(useParams().id)

  const userData: User[] = useAppSelector((store) => store.localReducer)
  const user = userData.find((art) => art.id === userId)

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
            padding: 50,
            position: 'relative',
          }}
        >
          <CardContent>
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {user?.first_name} {user?.last_name}
            </Typography>

            <CardMedia
              component="img"
              sx={{
                pt: '56.25%',
              }}
              image={`data:image/jpeg;base64,${user?.profile_img}`}
              alt={user?.user_name}
            />

            <Typography
              component="h5"
              variant="body1"
              align="center"
              color="text.primary"
              gutterBottom
            >
              <div>
                <ul className="about-list">
                  <li>
                    Name: {user?.first_name} {user?.last_name}
                  </li>
                  <li>User name: {user?.user_name}</li>
                  <li>Age: {user?.age}</li>
                  <li>
                    Origin: {user?.country_origin}, {user?.city}
                  </li>
                  <li>Main language: {user?.prim_language}</li>
                  <li>English level: {user?.english_level}</li>
                </ul>
              </div>
            </Typography>

            <Typography
              component="h5"
              variant="body1"
              align="center"
              color="text.primary"
              gutterBottom
            >
              About me: {user?.description}
            </Typography>

            {/* ORDERED LIST FOR SHARING */}
            <Typography
              component="h5"
              variant="body1"
              align="center"
              color="text.primary"
              gutterBottom
            >
              <div>
                <ul className="likes-list">
                  <li>{user?.sharing_one}</li>
                  <li>{user?.sharing_two}</li>
                  <li>{user?.sharing_three}</li>
                </ul>
                <p>You can contact me on: {user?.email}</p>
              </div>
            </Typography>
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
            <Button size="small" onClick={() => handleClick(userId)}>
              Delete
            </Button>
            <Button size="small" variant="contained" onClick={handleEdit}>
              {editMode ? 'Close' : 'Edit'}
            </Button>
            {editMode && (
              <EditProfileForm initialData={user ?? null} id={userId} />
            )}
          </CardActions>
        </Card>
      </Container>
    </>
  )
}

// DONE

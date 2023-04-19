import { IfAuthenticated, IfNotAuthenticated, AuthIdMatches, AuthIdDoesNotMatch } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks'
import { useParams } from 'react-router-dom'
import { User } from '../../models/Users'
import { useEffect, useState } from 'react'
import { getLocalThunk} from '../actions/local'
import {
  Typography,
  Box,
  Container,
  CardMedia,
  CardActionArea,
} from '../styles/imports'

import {
  StyledContainer,
  StyledCard,
  StyledCardMedia,
  StyledCardLabel,
  StyledTestCard,
  StyledBox,
  StyledTestContent,
  StyledTestLabel,
} from '../styles/styles'

function Home() {
  const { loginWithRedirect, user } = useAuth0()
  console.log(user, 'testing the auth0 user to see what comes up')
  const dispatch = useAppDispatch()
  const userId = Number(useParams().id)

  const userData: User[] = useAppSelector((store) => store.localReducer)
  const userProfile = userData.find((person) => person.id === userId)

  useEffect(() => {
    dispatch(getLocalThunk(userId))
  }, [dispatch, userId])


  return (
    <>
      <StyledBox id="tile-subtitle">
        <Container maxWidth="lg">
          <Typography component="h1" variant="h1" align="center" gutterBottom>
            Buddy
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            gutterBottom
          >
            Connecting people from abroad with local Wellingtonian&apos;s
          </Typography>
        </Container>
      </StyledBox>



      {/* THE TWO CARDS IN THE MIDDLE  */}
      <StyledContainer>

        <StyledCard id="localCard">
        <IfNotAuthenticated>
            <Link to="/" onClick={() => loginWithRedirect()}>
              <Box>
                <CardActionArea>
                  <StyledCardMedia
                    component="img"
                    image="local-icon.svg"
                    alt="local image"
                  />
                  <StyledCardLabel variant="h6" align="center">
                    View Locals
                  </StyledCardLabel>
                </CardActionArea>
              </Box>
            </Link>
          </IfNotAuthenticated>

          <IfAuthenticated>
             <AuthIdMatches id={userProfile?.auth_id}>
              <Link to="/all-profiles/local">
                <Box>
                  <CardActionArea>
                    <StyledCardMedia
                      component="img"
                      image="local-icon.svg"
                      alt="local image"
                    />
                    <StyledCardLabel variant="h6" align="center">
                      View Locals
                    </StyledCardLabel>
                  </CardActionArea>
                </Box>
              </Link>
              </AuthIdMatches>

              <AuthIdDoesNotMatch id={userProfile?.auth_id}>
              <Link to="/create-profile">
                <Box>
                  <CardActionArea>
                    <StyledCardMedia
                      component="img"
                      image="local-icon.svg"
                      alt="local image"
                    />
                    <StyledCardLabel variant="h6" align="center">
                      View Locals
                    </StyledCardLabel>
                  </CardActionArea>
                </Box>
              </Link> 
              </AuthIdDoesNotMatch>
              </IfAuthenticated> 
        </StyledCard>

        <StyledCard id="internationalCard">
        <IfNotAuthenticated>
            <Link to="/" onClick={() => loginWithRedirect()}>
              <Box>
                <CardActionArea>
                  <StyledCardMedia
                    component="img"
                    image="international-icon.svg"
                    alt="international image"
                  />
                  <StyledCardLabel variant="h6" align="center">
                    View Locals
                  </StyledCardLabel>
                </CardActionArea>
              </Box>
            </Link>
          </IfNotAuthenticated>

          <IfAuthenticated>
             <AuthIdMatches id={userProfile?.auth_id}>
              <Link to="/all-profiles/international">
                <Box>
                  <CardActionArea>
                    <StyledCardMedia
                      component="img"
                      image="international-icon.svg"
                    alt="international image"
                    />
                    <StyledCardLabel variant="h6" align="center">
                      View Locals
                    </StyledCardLabel>
                  </CardActionArea>
                </Box>
              </Link>
              </AuthIdMatches>

              <AuthIdDoesNotMatch id={userProfile?.auth_id}>
              <Link to="/create-profile">
                <Box>
                  <CardActionArea>
                    <StyledCardMedia
                      component="img"
                      image="international-icon.svg"
                    alt="international image"
                    />
                    <StyledCardLabel variant="h6" align="center">
                      View Locals
                    </StyledCardLabel>
                  </CardActionArea>
                </Box>
              </Link> 
              </AuthIdDoesNotMatch>
              </IfAuthenticated> 
        </StyledCard>


      </StyledContainer>
      

      {/* THE TESTIMONIALS SECTION  */}
      <div className="bg-img-wrapper">
      <div className='bg-img'>
      <StyledTestCard id="testimonial" maxWidth="md">
        <StyledBox>
          <StyledTestLabel variant="h4" align="center" gutterBottom>
            Testimonials
          </StyledTestLabel>
          <StyledTestContent variant="h5" align="center" gutterBottom>
            &quot;I had the best time meeting Lucas. He really helped me feel
            comfortable learning about Wellington and finding the best place to
            eat. Yum!&quot; - Sarah
          </StyledTestContent>
        </StyledBox>
      </StyledTestCard>
      </div>
      </div>
    </>
  )
}

export default Home

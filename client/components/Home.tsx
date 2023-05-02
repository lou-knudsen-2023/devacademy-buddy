import {
  IfAuthenticated,
  IfNotAuthenticated,
  AuthIdMatches,
  AuthIdDoesNotMatch,
} from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks'
import { useParams } from 'react-router-dom'
import { User } from '../../models/Users'
import { useEffect, useState } from 'react'
import { getLocalThunk } from '../actions/local'
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
  const userData: User[] = useAppSelector((store) => store.localReducer)
  const userProfile = userData.find((person) => person.auth_id === user?.sub)

  return (
    <>
      <StyledBox id="tile-subtitle">
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{ marginTop: '110px', height: '20vh', p: 10 }}
            className="text-hearder"
          >
            Connecting people from abroad with local Wellingtonian&apos;s
          </Typography>
        </Container>
      </StyledBox>

      {/* THE TWO CARDS IN THE MIDDLE  */}
      <StyledContainer className="card-container">
        <StyledCard id="localCard" className="card">
          <IfNotAuthenticated>
            <Link
              to="/"
              onClick={() => loginWithRedirect()}
              style={{ textDecoration: 'none' }}
            >
              <Box>
                <CardActionArea className="container-img">
                  <StyledCardMedia
                    component="img"
                    image="./images/localnew.jpg"
                    alt="local image"
                    className="action-card"
                  />
                  <StyledCardLabel
                    variant="h6"
                    align="center"
                    sx={{
                      fontWeight: '400',
                      fontSize: '1.5rem',
                    }}
                  >
                    Connect with a local
                  </StyledCardLabel>
                </CardActionArea>
              </Box>
            </Link>
          </IfNotAuthenticated>

          <IfAuthenticated>
            <Link
              to={userProfile ? '/all-profiles/local' : '/create-profile'}
              style={{ textDecoration: 'none' }}
            >
              <Box>
                <CardActionArea className="container-img">
                  <StyledCardMedia
                    component="img"
                    image="./images/localnew.jpg"
                    alt="local image"
                  />
                  <StyledCardLabel
                    variant="h6"
                    align="center"
                    sx={{
                      fontWeight: '400',
                      fontSize: '1.5rem',
                    }}
                  >
                    Connect with a local
                  </StyledCardLabel>
                </CardActionArea>
              </Box>
            </Link>
          </IfAuthenticated>
        </StyledCard>

        <StyledCard id="internationalCard" className="card">
          <IfNotAuthenticated>
            <Link
              to="/"
              onClick={() => loginWithRedirect()}
              style={{ textDecoration: 'none' }}
            >
              <Box>
                <CardActionArea className="container-img">
                  <StyledCardMedia
                    component="img"
                    image="./images/intnew.jpg"
                    alt="international image"
                  />
                  <StyledCardLabel
                    variant="h6"
                    align="center"
                    sx={{
                      fontWeight: '400',
                      fontSize: '1.5rem',
                    }}
                  >
                    Connect with a international
                  </StyledCardLabel>
                </CardActionArea>
              </Box>
            </Link>
          </IfNotAuthenticated>

          <IfAuthenticated>
            <Link
              to={userProfile ? '/all-profiles/local' : '/create-profile'}
              style={{ textDecoration: 'none' }}
            >
              <Box>
                <CardActionArea className="container-img">
                  <StyledCardMedia
                    component="img"
                    image="./images/intnew.jpg"
                    alt="international image"
                  />
                  <StyledCardLabel
                    variant="h6"
                    align="center"
                    sx={{
                      fontWeight: '400',
                      fontSize: '1.5rem',
                    }}
                  >
                    Connect with an international
                  </StyledCardLabel>
                </CardActionArea>
              </Box>
            </Link>
          </IfAuthenticated>
        </StyledCard>
      </StyledContainer>

      {/* THE TESTIMONIALS SECTION  */}
      <div className="image-contain">
        <img className="img-size" src="/images/asset2.png" alt="images" />

        <StyledTestCard maxWidth="md" className="testimonial">
          <StyledBox>
            <StyledTestLabel variant="h4" align="center" gutterBottom>
              Testimonials
            </StyledTestLabel>
            <StyledTestContent variant="h5" align="center" gutterBottom>
              &quot;I had the best time meeting Lucas. He really helped me feel
              comfortable learning about Wellington and finding the best place
              to eat. Yum!&quot; - Sarah
            </StyledTestContent>
          </StyledBox>
        </StyledTestCard>
      </div>
    </>
  )
}

export default Home

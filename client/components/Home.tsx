import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import {
  Typography,
  Box,
  // Button,
  Container,
  // Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '../../utils/mui'

import {
  createTheme,
  ThemeProvider,
  // responsiveFontSizes,
} from '../../utils/mui'

const theme = createTheme()

function Home() {
  const { logout, loginWithRedirect, user } = useAuth0()

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          id="tile-subtitle"
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
              &quot;Connecting people from abroad with local
              Wellingtonians&quot;
            </Typography>
          </Container>
        </Box>

        {/* THE TWO CARDS IN THE MIDDLE  */}
        <div
          id="cardContainer"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div id="localCard">
            <Card
              style={{
                maxWidth: 345,
                minHeight: 350,
                margin: 10,
                position: 'relative',
              }}
            >
              <IfAuthenticated>
                <Box>
                  <Link to="/allprofiles">
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image="local-icon.svg"
                        alt="local image"
                      />
                      <CardContent
                        style={{
                          position: 'absolute',
                          top: 'auto',
                          right: 0,
                          bottom: 0,
                          left: 0,
                          marginTop: 'auto',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="h2"
                          align="center"
                          style={{ color: 'black' }}
                        >
                          View Locals
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Box>
              </IfAuthenticated>
              <IfNotAuthenticated>
                <Box>
                  <Link to="/locals" onClick={() => loginWithRedirect()}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image="local-icon.svg"
                        alt="local image"
                      />
                      <CardContent
                        style={{
                          position: 'absolute',
                          top: 'auto',
                          right: 0,
                          bottom: 0,
                          left: 0,
                          marginTop: 'auto',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="h2"
                          align="center"
                          style={{ color: 'black' }}
                        >
                          View Locals
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Box>
              </IfNotAuthenticated>
            </Card>
          </div>

          <div
            id="internationalCard"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card
              style={{
                maxWidth: 345,
                minHeight: 350,
                margin: 10,
                position: 'relative',
              }}
            >
              <IfAuthenticated>
                <Box>
                  <Link to="/allprofiles">
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image="international-icon.svg"
                        alt="international image"
                      />
                      <CardContent
                        style={{
                          position: 'absolute',
                          top: 'auto',
                          right: 0,
                          bottom: 0,
                          left: 0,
                          marginTop: 'auto',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="h2"
                          align="center"
                          style={{ color: 'black' }}
                        >
                          View International
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Box>
              </IfAuthenticated>
              <IfNotAuthenticated>
                <Box>
                  <Link
                    to="/internationals"
                    onClick={() => loginWithRedirect()}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image="international-icon.svg"
                        alt="international image"
                      />
                      <CardContent
                        style={{
                          position: 'absolute',
                          top: 'auto',
                          right: 0,
                          bottom: 0,
                          left: 0,
                          marginTop: 'auto',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="h2"
                          align="center"
                          style={{ color: 'black' }}
                        >
                          View Internationals
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Box>
              </IfNotAuthenticated>
            </Card>
          </div>
        </div>

        {/* THE TESTIMONIALS SECTION  */}
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
              component="h3"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Testimonials
            </Typography>
            <Typography variant="h5" align="center" color="body2" paragraph>
              &quot;I had the best time meeting Reuben. He really helped me feel
              comfortable learning about Wellington and finding the best place
              to eat. Yum!&quot; - Ado
            </Typography>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default Home

{
  /* <Container maxWidth="lg">
<Stack
  sx={{ pt: 4 }}
  direction="row"
  spacing={2}
  justifyContent="center"
>
  <Button variant="contained">View Locals</Button>
</Stack>
</Container>
</Box> */
}

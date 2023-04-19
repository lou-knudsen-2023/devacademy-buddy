import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { addNewLocalThunk, setLocalThunk } from '../actions/local'
import { User } from '../../models/Users'
import { useAuth0 } from '@auth0/auth0-react'
import * as Base64 from 'base64-arraybuffer'
import { useNavigate } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Container,
  MenuItem,
  Select,
  Button,
  Input,
} from '@mui/material'
import {
  StyledBox,
  StyledContainer,
  StyledLargerCard,
  StyledFormElements,
} from '../styles/styles'

import { SelectChangeEvent } from '@mui/material/Select'

export default function CreateProfileForm() {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [userMethod, setMethods] = useState({} as User)

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target
    setMethods({ ...userMethod, [name]: value })
  }

  const updateFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onload = () => {
        setMethods({
          ...userMethod,
          profile_img: Base64.encode(reader.result as ArrayBuffer),
        })
      }
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const token = await getAccessTokenSilently()
      console.log(userMethod)
      dispatch(addNewLocalThunk(userMethod, token))
      dispatch(setLocalThunk())
      navigate(
        userMethod.user_status == 'local'
          ? '/all-profiles/international'
          : '/all-profiles/local'
      )
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <StyledBox id="tile-subtitle">
        <Typography
          variant="h2"
          align="center"
          sx={{ my: 5, marginTop: '180px' }}
          className="text-hearder"
          gutterBottom
        >
          Create your profile
        </Typography>

        <StyledContainer maxWidth="lg">
          <StyledLargerCard align="center">
            <form onSubmit={handleSubmit}>
              <FormControl sx={{ textAlign: 'left' }}>
                <FormLabel
                  htmlFor="first_name"
                  sx={{ fontWeight: '600 !important' }}
                >
                  First Name
                </FormLabel>
                <TextField
                  type="text"
                  name="first_name"
                  value={userMethod.first_name}
                  onChange={handleChange}
                  placeholder="First name"
                  sx={{ my: 2 }}
                  required
                ></TextField>
                <FormLabel
                  htmlFor="last_name"
                  sx={{ fontWeight: '600 !important' }}
                >
                  Last name{' '}
                </FormLabel>
                <TextField
                  type="text"
                  name="last_name"
                  value={userMethod.last_name}
                  onChange={handleChange}
                  placeholder="Last name"
                  sx={{ my: 2 }}
                  required
                ></TextField>
                <FormLabel
                  htmlFor="user_name"
                  sx={{ fontWeight: '600 !important' }}
                >
                  User Name
                </FormLabel>
                <TextField
                  type="text"
                  name="user_name"
                  value={userMethod.user_name}
                  onChange={handleChange}
                  placeholder="User name"
                  sx={{ my: 2 }}
                  required
                ></TextField>
                <FormLabel
                  htmlFor="email"
                  sx={{ fontWeight: '600 !important' }}
                >
                  Email
                </FormLabel>
                <TextField
                  name="email"
                  value={userMethod.email}
                  type="text"
                  className="text-input"
                  onChange={handleChange}
                  placeholder="someone@example.com"
                  sx={{ my: 2 }}
                  required
                ></TextField>
                <FormLabel htmlFor="age" sx={{ fontWeight: '600 !important' }}>
                  Age
                </FormLabel>
                <TextField
                  name="age"
                  value={userMethod.age}
                  type="text"
                  className="text-input"
                  onChange={handleChange}
                  sx={{ my: 2 }}
                  placeholder="your age"
                  //   required
                ></TextField>

                <FormLabel
                  htmlFor="country_origin"
                  sx={{ fontWeight: '600 !important' }}
                >
                  Country Of Origin
                </FormLabel>
                <TextField
                  name="country_origin"
                  value={userMethod.country_origin}
                  type="text"
                  className="text-input"
                  onChange={handleChange}
                  sx={{ my: 2 }}
                  placeholder="country of origin"
                  //   required
                ></TextField>
                <FormLabel htmlFor="city" sx={{ fontWeight: '600 !important' }}>
                  City
                </FormLabel>
                <TextField
                  name="city"
                  value={userMethod.city}
                  type="text"
                  className="text-input"
                  onChange={handleChange}
                  placeholder="city"
                  sx={{ my: 2 }}
                  //   required
                ></TextField>

                {/* {LOU DROP DOWN} */}
                <FormLabel
                  htmlFor="userStatus"
                  sx={{ fontWeight: '600 !important' }}
                >
                  What best describes you?
                </FormLabel>
                <Select
                  name="user_status"
                  id="userStatus"
                  value={userMethod.user_status}
                  sx={{ my: 2 }}
                  onChange={handleChange}
                  defaultValue={'DEFAULT'}
                >
                  <MenuItem value="DEFAULT" disabled hidden>
                    Pick an option
                  </MenuItem>
                  <MenuItem value="international">International</MenuItem>
                  <MenuItem value="local">Local</MenuItem>
                </Select>

                <FormLabel
                  htmlFor="primLanguage"
                  sx={{ fontWeight: '600 !important' }}
                >
                  Primary Language
                </FormLabel>
                <TextField
                  name="prim_language"
                  type="text"
                  id="primLanguage"
                  value={userMethod.prim_language}
                  onChange={handleChange}
                  sx={{ my: 2 }}
                ></TextField>

                {/* {LOU DROP DOWN */}
                <FormLabel
                  htmlFor="englishLevel"
                  sx={{ fontWeight: '600 !important' }}
                >
                  English Level
                </FormLabel>
                <Select
                  name="english_level"
                  id="englishLevel"
                  value={userMethod.english_level}
                  onChange={handleChange}
                  sx={{ my: 2 }}
                  defaultValue={'DEFAULT'}
                  required
                >
                  <MenuItem value="DEFAULT" disabled hidden>
                    Pick an option
                  </MenuItem>
                  <MenuItem value="no_english">No English</MenuItem>
                  <MenuItem value="some_english">Some English</MenuItem>
                  <MenuItem value="fluent_english">Fluent English</MenuItem>
                </Select>

                <FormLabel
                  htmlFor="shareOne"
                  sx={{ fontWeight: '600 !important' }}
                >
                  Quality to Share One
                </FormLabel>
                <TextField
                  name="sharing_one"
                  type="text"
                  id="shareOne"
                  value={userMethod.sharing_one}
                  onChange={handleChange}
                  sx={{ my: 2 }}
                ></TextField>

                <FormLabel
                  htmlFor="shareTwo"
                  sx={{ fontWeight: '600 !important' }}
                >
                  Quality to Share Two
                </FormLabel>
                <TextField
                  name="sharing_two"
                  type="text"
                  id="shareTwo"
                  value={userMethod.sharing_two}
                  onChange={handleChange}
                  sx={{ my: 2 }}
                ></TextField>

                <FormLabel
                  htmlFor="shareThree"
                  sx={{ fontWeight: '600 !important' }}
                >
                  Quality to Share Three
                </FormLabel>
                <TextField
                  name="sharing_three"
                  type="text"
                  id="shareThree"
                  value={userMethod.sharing_three}
                  onChange={handleChange}
                  sx={{ my: 2 }}
                ></TextField>
                <FormLabel
                  htmlFor="description"
                  sx={{ fontWeight: '600 !important' }}
                >
                  Description
                </FormLabel>
                <TextField
                  name="description"
                  id="description"
                  value={userMethod.description}
                  onChange={handleChange}
                  sx={{ my: 2 }}
                ></TextField>

                <FormLabel
                  htmlFor="profileImage"
                  sx={{ fontWeight: '600 !important' }}
                >
                  Choose your profile image
                </FormLabel>
                <Input type="file" id="profileImage" onChange={updateFile} />
                <Button
                  sx={{ my: 2, fontSize: '15px !important', marginTop: '10px' }}
                  type="submit"
                  variant="outlined"
                  className="button-style"
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          </StyledLargerCard>
        </StyledContainer>
      </StyledBox>
    </>
  )
}

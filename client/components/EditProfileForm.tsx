import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { updateLocalThunk, setLocalThunk } from '../actions/local'
import { User } from '../../models/Users'
import * as Base64 from 'base64-arraybuffer'

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

interface EditProfileFormProps {
  initialData: User | null
  id: number
}

export default function EditProfileForm({
  initialData,
  id,
}: EditProfileFormProps) {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({
    user_name: initialData?.first_name,
    first_name: initialData?.first_name,
    last_name: initialData?.last_name,
    email: initialData?.email,
    age: initialData?.age,
    country_origin: initialData?.country_origin,
    city: initialData?.city,
    user_status: initialData?.user_status,
    prim_language: initialData?.prim_language,
    english_level: initialData?.english_level,
    sharing_one: initialData?.sharing_one,
    sharing_two: initialData?.sharing_two,
    sharing_three: initialData?.sharing_three,
    description: initialData?.description,
    profile_img: initialData?.profile_img,
  } as User)

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const updateFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onload = () => {
        setFormData({
          ...formData,
          profile_img: Base64.encode(reader.result as ArrayBuffer),
        })
      }
    }
  }
  console.log(formData)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(updateLocalThunk(id, formData))
    dispatch(setLocalThunk())
  }

  return (
    <StyledBox>
      <StyledContainer maxWidth="lg">
        <StyledLargerCard align="center">
          <Typography variant="h4" align="center" sx={{ my: 5 }} gutterBottom>
            Edit your profile
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ textAlign: 'left' }}>
              <FormLabel htmlFor="first_name">User Name</FormLabel>
              <TextField
                name="user_name"
                type="text"
                value={formData?.user_name}
                onChange={handleChange}
                sx={{ my: 2 }}
              ></TextField>
              <FormLabel htmlFor="first_name">First Name</FormLabel>
              <TextField
                name="first_name"
                type="text"
                value={formData?.first_name}
                onChange={handleChange}
                sx={{ my: 2 }}
              ></TextField>
              <FormLabel htmlFor="last_name">Last name </FormLabel>
              <TextField
                name="last_name"
                type="text"
                value={formData?.last_name}
                onChange={handleChange}
                sx={{ my: 2 }}
              ></TextField>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                name="email"
                value={formData?.email}
                type="text"
                className="text-input"
                onChange={handleChange}
                sx={{ my: 2 }}
              ></TextField>
              <FormLabel htmlFor="age">Age</FormLabel>
              <TextField
                name="age"
                value={formData?.age}
                type="text"
                className="text-input"
                onChange={handleChange}
                placeholder="your age"
                sx={{ my: 2 }}
              ></TextField>
              <FormLabel htmlFor="country_origin">Country Of Origin</FormLabel>
              <TextField
                name="country_origin"
                value={formData?.country_origin}
                type="text"
                className="text-input"
                onChange={handleChange}
                placeholder="country of origin"
                sx={{ my: 2 }}
              ></TextField>
              <FormLabel htmlFor="city">City</FormLabel>
              <TextField
                name="city"
                value={formData?.city}
                type="text"
                className="text-input"
                onChange={handleChange}
                sx={{ my: 2 }}
                placeholder="city"
              ></TextField>
              <FormLabel htmlFor="userStatus">
                What best describes you?
              </FormLabel>
              <Select
                id="userStatus"
                value={formData?.user_status}
                sx={{ my: 2 }}
                onChange={handleChange}
              >
                <MenuItem value="international">International</MenuItem>
                <MenuItem value="local">Local</MenuItem>
              </Select>

              <FormLabel htmlFor="primLanguage">Primary Language</FormLabel>
              <TextField
                type="text"
                id="primLanguage"
                name="prim_language"
                value={formData?.prim_language}
                onChange={handleChange}
                sx={{ my: 2 }}
              ></TextField>

              <FormLabel htmlFor="englishLevel">English Level</FormLabel>
              <Select
                id="englishLevel"
                value={formData?.english_level}
                onChange={handleChange}
                sx={{ my: 2 }}
              >
                <MenuItem value="no_english">No English</MenuItem>
                <MenuItem value="some_english">Some English</MenuItem>
                <MenuItem value="fluent_english">Fluent English</MenuItem>
              </Select>

              <FormLabel htmlFor="shareOne">Quality to Share One</FormLabel>
              <TextField
                type="text"
                id="shareOne"
                name="sharing_one"
                value={formData?.sharing_one}
                onChange={handleChange}
                sx={{ my: 2 }}
              ></TextField>

              <FormLabel htmlFor="shareTwo">Quality to Share Two</FormLabel>
              <TextField
                type="text"
                id="shareTwo"
                name="sharing_two"
                value={formData?.sharing_two}
                onChange={handleChange}
                sx={{ my: 2 }}
              ></TextField>

              <FormLabel htmlFor="shareThree">Quality to Share Three</FormLabel>
              <TextField
                type="text"
                id="shareThree"
                name="sharing_three"
                value={formData?.sharing_three}
                onChange={handleChange}
                sx={{ my: 2 }}
              ></TextField>
              <FormLabel htmlFor="description">Description</FormLabel>
              <TextField
                id="description"
                name="description"
                value={formData?.description}
                onChange={handleChange}
                sx={{ my: 2 }}
              ></TextField>

              <FormLabel htmlFor="profileImage">Profile Image</FormLabel>
              <Input
                type="file"
                id="profileImage"
                onChange={updateFile}
                sx={{ my: 2 }}
              />
              <Button type="submit">Submit</Button>
            </FormControl>
          </form>
        </StyledLargerCard>
      </StyledContainer>
    </StyledBox>
  )
}

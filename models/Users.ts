import { PaletteOptions } from '@mui/material'

export interface UserData {
  user_name: string
  first_name: string
  last_name: string
  email: string
  age: string
  country_origin: string
  city: string
  user_status: string
  prim_language: string
  english_level: string
  sharing_one: string
  sharing_two: string
  sharing_three: string
  description: string
  profile_img: string
}

export interface User extends UserData {
  id: number
  auth_id: string
}

export interface Palette {
  tertiary: PaletteOptions['primary']
}

export interface StyledProps {
  component?: string
  variant?: string
  alt?: string
  textAlign?: string
  align?: string
}

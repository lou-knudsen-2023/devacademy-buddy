export interface userData {
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

export interface user extends userData {
  id: number
}

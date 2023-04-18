import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { updateLocalThunk, setLocalThunk } from '../actions/local'
import { User } from '../../models/Users'
import * as Base64 from 'base64-arraybuffer'

interface EditProfileFormProps {
  initialData: User | null
  id: number
}

export default function EditProfileFormTest({
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    <div className="form-add">
      <form onSubmit={handleSubmit}>
        <h1>edit user</h1>
        <label htmlFor="first_name">User Name</label>
        <input
          name="user_name"
          type="text"
          value={formData?.user_name}
          onChange={handleChange}
        />
        <label htmlFor="first_name">First Name</label>
        <input
          name="first_name"
          type="text"
          value={formData?.first_name}
          onChange={handleChange}
        />
        <label htmlFor="last_name">Last name </label>
        <input
          name="last_name"
          type="text"
          value={formData?.last_name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={formData?.email}
          type="text"
          className="text-input"
          onChange={handleChange}
        />
        <label htmlFor="age">Age</label>
        <input
          name="age"
          value={formData?.age}
          type="text"
          className="text-input"
          onChange={handleChange}
          placeholder="your age"
        />
        <label htmlFor="country_origin">Country Of Origin</label>
        <input
          name="country_origin"
          value={formData?.country_origin}
          type="text"
          className="text-input"
          onChange={handleChange}
          placeholder="country of origin"
        />
        <label htmlFor="city">City</label>
        <input
          name="city"
          value={formData?.city}
          type="text"
          className="text-input"
          onChange={handleChange}
          placeholder="city"
        />
        <label htmlFor="userStatus">User Status</label>
        <select
          id="userStatus"
          value={formData?.user_status}
          onChange={handleChange}
        >
          <option value="international">International</option>
          <option value="local">Local</option>
        </select>

        <label htmlFor="primLanguage">Primary Language</label>
        <input
          type="text"
          id="primLanguage"
          name="prim_language"
          value={formData?.prim_language}
          onChange={handleChange}
        />

        <label htmlFor="englishLevel">English Level</label>
        <select
          id="englishLevel"
          value={formData?.english_level}
          onChange={handleChange}
        >
          <option value="no_english">No English</option>
          <option value="some_english">Some English</option>
          <option value="fluent_english">Fluent English</option>
        </select>

        <label htmlFor="shareOne">Quality to Share One</label>
        <input
          type="text"
          id="shareOne"
          name="sharing_one"
          value={formData?.sharing_one}
          onChange={handleChange}
        />

        <label htmlFor="shareTwo">Quality to Share Two</label>
        <input
          type="text"
          id="shareTwo"
          name="sharing_two"
          value={formData?.sharing_two}
          onChange={handleChange}
        />

        <label htmlFor="shareThree">Quality to Share Three</label>
        <input
          type="text"
          id="shareThree"
          name="sharing_three"
          value={formData?.sharing_three}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData?.description}
          onChange={handleChange}
        />

        <label htmlFor="profileImage">Profile Image</label>
        <input
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={updateFile}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { addNewLocalThunk, setLocalThunk } from '../actions/local'
import { User } from '../../models/Users'
import { useAuth0 } from '@auth0/auth0-react'
import * as Base64 from 'base64-arraybuffer'
import { addNewUserAPI } from '../apis/apiClient'

export default function CreateProfileFormTest() {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useAppDispatch()

  const [userMethod, setMethods] = useState({} as User)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
      dispatch(addNewLocalThunk(userMethod, token))
      dispatch(setLocalThunk())
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="form-add">
      <form onSubmit={handleSubmit}>
        <h1>Add user</h1>

        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          name="first_name"
          value={userMethod.first_name}
          onChange={handleChange}
          placeholder="First name"
          required
        />
        <label htmlFor="last_name">Last name </label>
        <input
          type="text"
          name="last_name"
          value={userMethod.last_name}
          onChange={handleChange}
          placeholder="Last name"
          required
        />
        <label htmlFor="user_name">User Name</label>
        <input
          type="text"
          name="user_name"
          value={userMethod.user_name}
          onChange={handleChange}
          placeholder="User name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={userMethod.email}
          type="text"
          className="text-input"
          onChange={handleChange}
          placeholder="someone@example.com"
          required
        />
        <label htmlFor="age">Age</label>
        <input
          name="age"
          value={userMethod.age}
          type="text"
          className="text-input"
          onChange={handleChange}
          placeholder="your age"
          //   required
        />
        <label htmlFor="country_origin">Country Of Origin</label>
        <input
          name="country_origin"
          value={userMethod.country_origin}
          type="text"
          className="text-input"
          onChange={handleChange}
          placeholder="country of origin"
          //   required
        />
        <label htmlFor="city">City</label>
        <input
          name="city"
          value={userMethod.city}
          type="text"
          className="text-input"
          onChange={handleChange}
          placeholder="city"
          //   required
        />
        <label htmlFor="userStatus">User Status</label>
        <select
          name="user_status"
          id="userStatus"
          value={userMethod.user_status}
          onChange={handleChange}
        >
          <option value="international">International</option>
          <option value="local">Local</option>
        </select>

        <label htmlFor="primLanguage">Primary Language</label>
        <input
          name="prim_language"
          type="text"
          id="primLanguage"
          value={userMethod.prim_language}
          onChange={handleChange}
        />

        <label htmlFor="englishLevel">English Level</label>
        <select
          name="english_level"
          id="englishLevel"
          value={userMethod.english_level}
          onChange={handleChange}
        >
          <option value="no_english">No English</option>
          <option value="some_english">Some English</option>
          <option value="fluent_english">Fluent English</option>
        </select>

        <label htmlFor="shareOne">Quality to Share One</label>
        <input
          name="sharing_one"
          type="text"
          id="shareOne"
          value={userMethod.sharing_one}
          onChange={handleChange}
        />

        <label htmlFor="shareTwo">Quality to Share Two</label>
        <input
          name="sharing_two"
          type="text"
          id="shareTwo"
          value={userMethod.sharing_two}
          onChange={handleChange}
        />

        <label htmlFor="shareThree">Quality to Share Three</label>
        <input
          name="sharing_three"
          type="text"
          id="shareThree"
          value={userMethod.sharing_three}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={userMethod.description}
          onChange={handleChange}
        />

        <label htmlFor="profileImage">Profile Image</label>
        <input type="file" id="profileImage" onChange={updateFile} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

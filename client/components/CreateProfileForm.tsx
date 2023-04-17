import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { addNewLocalThunk } from '../actions/local'
import { User } from '../../models/Users'

function CreateProfileForm() {
  const dispatch = useAppDispatch()

  const [userMethod, setMethods] = useState({} as User)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMethods({ ...userMethod, [name]: value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(addNewLocalThunk(userMethod))
  }

  return (
    <div className="form-add">
      <form onSubmit={handleSubmit}>
        <h1>Add user</h1>

        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          value={userMethod.first_name}
          onChange={handleChange}
          placeholder="First name"
          required
        />
        <label htmlFor="last_name">Last name </label>
        <input
          type="text"
          value={userMethod.last_name}
          onChange={handleChange}
          placeholder="Last name"
          //   required
        />
        <label htmlFor="user_name">User Name</label>
        <input
          type="text"
          value={userMethod.user_name}
          onChange={handleChange}
          placeholder="User name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          value={userMethod.email}
          type="text"
          className="text-input"
          onChange={handleChange}
          placeholder="someone@example.com"
          //   required
        />
        <label htmlFor="age">Age</label>
        <input
          value={userMethod.age}
          type="text"
          className="text-input"
          onChange={handleChange}
          placeholder="your age"
          //   required
        />
        <label htmlFor="country_origin">Country Of Origin</label>
        <input
          value={userMethod.country_origin}
          type="text"
          className="text-input"
          onChange={handleChange}
          placeholder="country of origin"
          //   required
        />
        <label htmlFor="city">City</label>
        <input
          value={userMethod.city}
          type="text"
          className="text-input"
          onChange={handleChange}
          placeholder="city"
          //   required
        />
        <label htmlFor="userStatus">User Status</label>
        <input
          type="text"
          id="userStatus"
          value={userMethod.user_status}
          onChange={handleChange}
        />

        <label htmlFor="primLanguage">Primary Language</label>
        <input
          type="text"
          id="primLanguage"
          value={userMethod.prim_language}
          onChange={handleChange}
        />

        <label htmlFor="englishLevel">English Level</label>
        <input
          type="text"
          id="englishLevel"
          value={userMethod.english_level}
          onChange={handleChange}
        />

        <label htmlFor="shareOne">Quality to Share One</label>
        <input
          type="text"
          id="shareOne"
          value={userMethod.sharing_one}
          onChange={handleChange}
        />

        <label htmlFor="shareTwo">Quality to Share Two</label>
        <input
          type="text"
          id="shareTwo"
          value={userMethod.sharing_two}
          onChange={handleChange}
        />

        <label htmlFor="shareThree">Quality to Share Three</label>
        <input
          type="text"
          id="shareThree"
          value={userMethod.sharing_three}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={userMethod.description}
          onChange={handleChange}
        />

        <label htmlFor="profileImage">Profile Image</label>
        <input
          type="file"
          id="sprofileImage"
          value={userMethod.profile_img}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateProfileForm

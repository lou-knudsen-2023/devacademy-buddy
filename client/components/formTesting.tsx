import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { addNewLocalThunk } from '../actions/local'
import { User } from '../../models/Users'

function AddMethodForm() {
  const dispatch = useAppDispatch()

  const [userMethod, setMethods] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    country_origin: '',
    city: '',
    user_status: '',
    prim_language: '',
    english_level: '',
    sharing_one: '',
    sharing_two: '',
    sharing_three: '',
    description: '',
    profile_img: '',
  } as User)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setMethods({ ...userMethod, [name]: value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(addNewLocalThunk(userMethod))
    setMethods({
      first_name: '',
      last_name: '',
      email: '',
      age: '',
      country_origin: '',
      city: '',
      user_status: '',
      prim_language: '',
      english_level: '',
      sharing_one: '',
      sharing_two: '',
      sharing_three: '',
      description: '',
      profile_img: '',
    } as User)
  }

  return (
    <div className="form-add">
      <form onSubmit={handleSubmit}>
        <h1>Share with us a new brewing technique</h1>
        <label htmlFor="first-name">First Name</label>
        <input
          name="first-name"
          type="text"
          value={userMethod.first_name}
          onChange={handleChange}
          placeholder="First name"
          required
        />
        <label htmlFor="last-name">Last name </label>
        <input
          name="last-name"
          type="text"
          value={userMethod.last_name}
          onChange={handleChange}
          placeholder="Last name"
          required
        />
        <label htmlFor="email">Email</label>
        <textarea
          name="email"
          value={userMethod.email}
          className="text-input"
          onChange={handleChange}
          placeholder="someone@example.com"
          required
        />
        <label htmlFor="age">Age</label>
        <textarea
          name="age"
          value={userMethod.age}
          className="text-input"
          onChange={handleChange}
          placeholder="your age"
          required
        />
        <label htmlFor="country">Country Of Origin</label>
        <textarea
          name="country"
          value={userMethod.country_origin}
          className="text-input"
          onChange={handleChange}
          placeholder="country of origin"
          required
        />
        <label htmlFor="city">City</label>
        <textarea
          name="city"
          value={userMethod.city}
          className="text-input"
          onChange={handleChange}
          placeholder="city"
          required
        />
        {/* <label htmlFor="user-status">City</label>
        <textarea
          name="user-status"
          value={userMethod.user_status}
          className="text-input"
          onChange={handleChange}
          placeholder="city"
        />  */}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddMethodForm

import { ChangeEvent, FormEvent, useState, useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { updateLocalThunk} from '../actions/local'
import { User, UserData} from '../../models/Users'
import { useParams } from 'react-router-dom'




interface EditProfileFormProps {
  initialData: User | null
  id: number
}

function EditProfileForm({ initialData, id }: EditProfileFormProps) {

  
  
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.localReducer[0])
  



  // const { id } = useParams<{ id: string }>()

  const [formData, setFormData] = useState<User | null >(initialData)



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (formData){
      dispatch(updateLocalThunk(Number(id), formData))
    }


    // setFormData({
    //   user_name:'',
    //   first_name: '',
    //   last_name: '',
    //   email: '',
    //   age: '',
    //   country_origin: '',
    //   city: '',
    //   user_status: '',
    //   prim_language: '',
    //   english_level: '',
    //   sharing_one: '',
    //   sharing_two: '',
    //   sharing_three: '',
    //   description: '',
    //   profile_img: '',
    // } as User)
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
            <input
                type="text"
                name="user_status"
                id="userStatus"
                value={formData?.user_status}
                onChange={handleChange}
            /> 

            <label htmlFor="primLanguage">Primary Language</label>
            <input
                type="text"
                id="primLanguage"
                name="prim_language"
                value={formData?.prim_language}
                onChange={handleChange}
            /> 

            <label htmlFor="englishLevel">English Level</label>
            <input
                type="text"
                id="englishLevel"
                name="english_level"
                value={formData?.english_level}
                onChange={handleChange}
                // placeholder = {user.english_level}
            /> 

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
            <input
                type="text"
                id="description"
                name="description"
                value={formData?.description}
                onChange={handleChange}
            /> 

            <label htmlFor="profileImage">Profile Image</label>
            <input
                type="text"
                id="sprofileImage"
                name="profile_img"
                value={formData?.profile_img}
                onChange={handleChange}
            /> 
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditProfileForm

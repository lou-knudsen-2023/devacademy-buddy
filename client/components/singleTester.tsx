import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { getLocalThunk } from '../actions/local'
import { useParams } from 'react-router-dom'
import EditProfileForm from './EditProfileForm'



export default function SingleProfilePage() {
  const dispatch = useAppDispatch()

  const { id } = useParams()

  const user = useAppSelector((state) =>
    state.localReducer.find((local) => local.id === Number(id))
  )

  useEffect(() => {
    dispatch(getLocalThunk(Number(id)))
  }, [dispatch, id])

  return (
    <section>
      <div>
        <h1>
          {user?.first_name} {user?.last_name}
        </h1>
        <p>{user?.description}</p>
        <p>
          {user?.city},{user?.country_origin}
        </p>
        <p>{user?.age}</p>
        <p>{user?.user_status}</p>
        <p>{user?.prim_language}</p>
        <p>{user?.english_level}</p>
        <p>{user?.sharing_one}</p>
        <p>{user?.sharing_two}</p>
        <p>{user?.sharing_three}</p>
        <p>{user?.email}</p>
      </div>
      <EditProfileForm />

    </section>
    
  )
}

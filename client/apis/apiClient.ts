import request from 'superagent'
import { User } from '../../models/Users'

export function getAllUsers(): Promise<User[]> {
  return request.get('/api/v1/buddy').then((res) => res.body)
}

export function deleteUser(id: number): Promise<User> {
  return request.delete(`/api/v1/buddy${id}`).then((res) => res.body)
}

export function addNewUser(newUser: User): Promise<User> {
  return request
    .post('/api/v1/buddy')
    .send(newUser)
    .then((res) => {
      return res.body
    })
}

export function updateUser(newUser: User, id: number): Promise<User> {
  return request
    .patch(`/api/v1/buddy${id}`)
    .send(newUser)
    .then((res) => {
      return res.body
    })
}

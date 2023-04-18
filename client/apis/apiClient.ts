import request from 'superagent'
import { User } from '../../models/Users'

export function getAllUsersAPI(): Promise<User[]> {
  return request.get('/api/v1/buddy').then((res) => res.body)
}

export function deleteUserAPI(id: number): Promise<User> {
  return request.delete(`/api/v1/buddy/${id}`).then((res) => res.body)
}

export function addNewUserAPI(newUser: User, token: string): Promise<User> {
  return request
    .post('/api/v1/buddy')
    .set('Authorization', `Bearer ${token}`)
    .send(newUser)
    .then((res) => {
      return res.body
    })
}

export function updateUserAPI(id: number, newUser: User): Promise<User> {
  return request
    .patch(`/api/v1/buddy/${id}`)
    .send(newUser)
    .then((res) => {
      return res.body
    })
}

export function getSingleUserAPI(id: number): Promise<User> {
  return request.get(`/api/v1/buddy/${id}`).then((res) => {
    return res.body
  })
}

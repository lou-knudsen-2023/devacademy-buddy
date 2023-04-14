import request from 'superagent'
import { UserData } from '../../models/Users'

export function getLocals(): Promise<UserData> {
  return request.get(locals).then((res) => res.body)
}

export function delLocal(id) {
  return request.delete(`${locals}${local.id}`).then((res) => {
    return res.body
  })
}

export function addLocal(newLocal: UserData) {
  return request
    .post()
    .send(newLocal)
    .then((res) => res.body)
}

export function updateLocal(newLocal: UserData) {
  return request
    .patch(`${locals}${newLocal.id}`)
    .send(newLocal)
    .then((res) => res.body[0])
}

import { User } from '../../models/Users'
import connection from './connection'

export function fetchAllDB(db = connection): Promise<User[]> {
  return db('users').select()
}

export function createProfileDB(
  newUser: User,
  db = connection
): Promise<User[]> {
  return db('users').insert(newUser).returning('*')
}

export function editProfileDB(
  updateUser: User,
  db = connection
): Promise<User[]> {
  return db('users')
    .where('users.id', updateUser.id)
    .first()
    .update(updateUser)
    .returning('*')
}

export function delProfileDB(id: number, db = connection): Promise<User[]> {
  return db('users')
    .where('users.id', id)
    .del()
    .then(() => {
      return db('users').where('users.id', id).del()
    })
}

export function fetchSingleDB(id: number, db = connection): Promise<User[]> {
  return db('users').select().where('users.id', id).first()
}

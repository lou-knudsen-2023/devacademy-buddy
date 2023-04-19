import express from 'express'
import * as db from '../db/db'
import { JwtRequest } from '../auth0'
import checkJwt from '../auth0'
import { User } from '../../models/Users'

const router = express.Router()

router.get('/', (req, res) => {
  db.fetchAllDB()
    .then((data) => {
      res.json(data)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.fetchSingleDB(id)
    .then((data) => {
      res.json(data)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

///////////////////////////////

router.post('/', checkJwt, (req: JwtRequest, res) => {
  const {
    user_name,
    first_name,
    last_name,
    email,
    age,
    country_origin,
    city,
    user_status,
    prim_language,
    english_level,
    sharing_one,
    sharing_two,
    sharing_three,
    description,
    profile_img,
  } = req.body

  const auth0Id = req.auth?.sub

  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  const data: User = {
    id: Number(req.params.id),
    user_name: user_name,
    first_name: first_name,
    last_name: last_name,
    email: email,
    age: age,
    country_origin: country_origin,
    city: city,
    user_status: user_status,
    prim_language: prim_language,
    english_level: english_level,
    sharing_one: sharing_one,
    sharing_two: sharing_two,
    sharing_three: sharing_three,
    description: description,
    profile_img: profile_img,
    auth_id: auth0Id,
  }

  db.createProfileDB(data)
    .then((data) => {
      res.json(data[0]) // no need refresh page anymore
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  db.delProfileDB(+req.params.id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const {
    user_name,
    first_name,
    last_name,
    email,
    age,
    country_origin,
    city,
    user_status,
    prim_language,
    english_level,
    sharing_one,
    sharing_two,
    sharing_three,
    description,
    profile_img,
    auth_id,
  } = req.body

  const data = {
    id: Number(req.params.id),
    user_name: user_name,
    first_name: first_name,
    last_name: last_name,
    email: email,
    age: age,
    country_origin: country_origin,
    city: city,
    user_status: user_status,
    prim_language: prim_language,
    english_level: english_level,
    sharing_one: sharing_one,
    sharing_two: sharing_two,
    sharing_three: sharing_three,
    description: description,
    profile_img: profile_img,
    auth_id: auth_id,
  } as User

  db.editProfileDB(data)
    .then((post) => {
      res.json(post)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router

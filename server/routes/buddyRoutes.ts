import express from 'express'
import * as db from '../db/db'
import { JwtRequest} from '../auth0'
import checkJwt from '../auth0'
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


router.post('/', (req, res) => {
    createProfileBD(req.body)
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.status(500).send(err.message)
      })
  })



router.delete('/:id', (req,res) =>{
    db.deProfileDB (+req.params.id)
    .then(() => {
        res.sendStatus(200) 
    })
    .catch((err) => {
        res.status(500).send(err.message)
    })
    
})


router.patch('/:id', (req, res) => {
    const {user_name, first_name, last_name, email, age, country_origin, city, user_status, prim_language, english_level, sharing_one, sharing_two, sharing_three, description, profile_img} = req.body
    const data = {user_name, first_name, last_name, email, age, country_origin, city, user_status, prim_language, english_level, sharing_one, sharing_two, sharing_three, description, profile_img}

    const id = Number(req.params.id)
  
    db.editProfileDB(id, data)
      .then((post) => {
        res.json(post[0])
      })
      .catch((err: Error) => {
        res.status(500).send(err.message)
      })
  })




export default router
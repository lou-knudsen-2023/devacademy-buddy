import express from 'express'
import { join } from 'node:path'

const server = express()
import buddyRoute from './routes/buddyRoutes'

server.use(express.json())
server.use(express.static(join('server', 'public')))


server.use ('/api/v1/buddy', buddyRoute)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

export default server

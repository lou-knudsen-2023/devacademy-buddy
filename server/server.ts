import express from 'express'
import { join } from 'node:path'
import fileUpload from 'express-fileupload'

const server = express()
import buddyRoute from './routes/buddyRoutes'

server.use(fileUpload())
server.use(express.json({ limit: '50mb' }))
server.use(express.json())
server.use(express.static(join('server', 'public')))

server.use('/api/v1/buddy', buddyRoute)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

export default server

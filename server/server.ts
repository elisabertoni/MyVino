import { join } from 'node:path'
import path from 'node:path'
import express from 'express'
import wine from './routes/wine'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/wine', wine)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

export default server

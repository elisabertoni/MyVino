import { join } from 'node:path'
import path from 'node:path'
import express from 'express'
import wineApi from './routes/wineApi'
import wine from './routes/wine'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/wine', wineApi)
server.use('/api/v1/*', (req, res) => res.sendStatus(404))
server.use('/v1/wine', wine)
server.use('/v1/*', (req, res) => res.sendStatus(404))


server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

export default server

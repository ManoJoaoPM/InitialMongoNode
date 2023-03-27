import cors from 'cors'
import express from 'express'
//import mongoose from 'mongoose'

import { config } from './config/config.js'
import Logging from './lib/logging.js'

const app = express()
app.use(express.json())
app.use(cors())

// mongoose
//   .connect(config.mongo.url)
//   .then(() => {
//     Logging.info('Connected to MongoDB')
//   })
//   .catch((error) => {
//     Logging.error('Unable to connect to MongoDB')
//     Logging.error(error)
//   })

app.listen(config.server.port, () => {
  Logging.info(`Server listening on port ${config.server.port}`)
})

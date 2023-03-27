import mongoose from 'mongoose'

import { config } from '../config/config.js'
import Logging from '../lib/logging.js'

mongoose
  .connect(config.mongo.url)
  .then(() => {
    Logging.info('Connected to MongoDB')
  })
  .catch((error) => {
    Logging.error('Unable to connect to MongoDB')
    Logging.error(error)
  })

module.exports = mongoose

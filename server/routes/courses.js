import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import coursesData from '../data/courses.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(coursesData)
})

router.get('/:courseId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/course.html'))
})

export default router
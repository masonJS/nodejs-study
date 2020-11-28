import express from 'express'
import { index } from '../controllers/controller.index'

const router = express.Router();

router.get('/', index)

export default router

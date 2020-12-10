import express from 'express'
import { get } from "../../controllers/v1/users.controller.js";

const router = express.Router();

router.route('/')
  .get(get)


export default router

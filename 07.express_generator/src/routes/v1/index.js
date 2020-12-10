import fs from 'fs';
import path from 'path';
import express from 'express';

const router = express.Router();
const moduleURL = new URL(import.meta.url).pathname;
// const indexJs = path.dirname(__filename);
const indexJs = path.dirname(moduleURL);
fs.readdirSync(indexJs)
  .filter(file => (file.indexOf('.') !== 0) && (file !== indexJs) && (file.slice(-9) === '.route.js'))
  .forEach(async routeFile => {
    const { default: module } = await import(`./${routeFile}`)
    return router.use(`/${routeFile.split('.')[0]}`, module)
  })


export default router

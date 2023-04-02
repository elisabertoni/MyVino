import express from 'express'
import request from 'superagent'
import * as dotenv from 'dotenv'
dotenv.config()

const apiKey = process.env.API_KEY 

const router = express.Router()

// GET /api/v1/wine
router.get('/:wineName/:vintage', async (req, res) => {
  try {
    const {vintage, wineName} = req.params
    const response = await request
      .get(`https://api.wine-searcher.com/x?api_key=${apiKey}&winename=${wineName}&vintage=${vintage}&format=J`)
    res.json(response.body)

  } catch(error) {
    console.log(error)
    res.sendStatus(500)
  }  
})

export default router

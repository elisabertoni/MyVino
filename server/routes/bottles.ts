import express from 'express'
import { addBottle, deleteBottle, getAllBottles, updateBottle } from '../db/db'

const router = express.Router()

// GET /v1/bottles
router.get('/', async (req, res) => {
  try {
    const bottles = await getAllBottles()
    res.json(bottles)

  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: "There was an error trying to get the bottles"
    })
  }
})

// POST /v1/bottles
router.post('/', async (req, res) => {
  try {
    const newBottle = req.body

    const [newBottleId] = await addBottle(newBottle)

    res.json({ id: newBottleId, ...newBottle })
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: "There was an error trying to add the bottle"
    })
  }
})

// PATCH /v1/bottles/:id
router.patch('/:id', async (req, res) => {
  try {
    const bottleId = req.params.id

    if (isNaN(Number(bottleId))) {
      res.status(400).json({
        error: 'Invalid Bottle ID',
      })
    }

    const updatedBottle = await updateBottle(Number(bottleId), req.body)
    // console.log(updatedBottle)
    res.json(updatedBottle)

  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: "There was an error trying to update the bottle"
    })
  }
})

// DELETE /v1/bottles/:id
router.delete('/:id', async (req, res) => {
  try {
    const bottleId = req.params.id
    if (isNaN(Number(bottleId))) {
      res.status(400).json({
        error: 'Invalid Bottle ID',
      })
    }
    await deleteBottle(Number(bottleId))

    res.status(200).json('OK')  

  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: "There was an error trying to delete the bottle"
    })
  }
})

export default router

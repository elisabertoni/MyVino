import express from 'express'
import { addProducer, deleteProducer, getAllProducers, updateProducer } from '../db/db'

const router = express.Router()

// GET /v1/producers
router.get('/', async (req, res) => {
  try {
    const producers = await getAllProducers()
    res.json(producers)

  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: "There was an error trying to get the producers"
    })
  }
})

// POST /v1/producers
router.post('/', async (req, res) => {
  try {
    const newProducer = req.body

    const [newProducerId] = await addProducer(newProducer)

    res.json({ id: newProducerId, ...newProducer })
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: "There was an error trying to add the producer"
    })
  }
})

// PATCH /v1/producers/:id
router.patch('/:id', async (req, res) => {
  try {
    const producerId = req.params.id

    if (isNaN(Number(producerId))) {
      res.status(400).json({
        error: 'Invalid Bottle ID',
      })
    }

    const updatedProducer = await updateProducer(Number(producerId), req.body)
    // console.log(updatedProducer)
    res.json(updatedProducer)

  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: "There was an error trying to update the producer"
    })
  }
})

// DELETE /v1/producers/:id
router.delete('/:id', async (req, res) => {
  try {
    const producerId = req.params.id
    if (isNaN(Number(producerId))) {
      res.status(400).json({
        error: 'Invalid Producer ID',
      })
    }
    await deleteProducer(Number(producerId))

    res.status(200).json('OK')  

  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: "There was an error trying to delete the producer"
    })
  }
})


export default router

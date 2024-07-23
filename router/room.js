import express from 'express'
import roomController from '../controller/room.js'

const router = express.Router()

router.get('/', roomController.bookedRooms)
router.get('/customer', roomController.allCustomer)
router.post('/', roomController.createRoom)
router.delete('/:id', roomController.deleteRoom)
router.put('/:id', roomController.booking)

export default router
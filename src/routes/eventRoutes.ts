import { Router } from 'express';
import { createEvent, getEvents, deleteEvent } from '../controllers/EventController';

const router = Router();

router.post('/create', createEvent);
router.get('/', getEvents);
router.delete('/:id', deleteEvent);

export default router;

import { Request, Response } from 'express';
import Event from '../models/Event';

const createEvent = async (req: Request, res: Response) => {
  const { name, date, description } = req.body;

  try {
    const event = new Event({ name, date, description });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Error creating event', error: 'Internal Server Error' });
  }
};

const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Error fetching events', error: 'Internal Server Error' });
  }
};

const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).json({ statusCode: 404, message: 'Event not found', error: 'Not Found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Error deleting event', error: 'Internal Server Error' });
  }
};

export { createEvent, getEvents, deleteEvent };

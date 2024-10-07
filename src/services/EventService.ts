import Event from '../models/Event';

export const createEvent = (name: string, date: Date, description?: string) => {
  const event = new Event({ name, date, description });
  return event.save();
};

export const getEvents = () => {
  return Event.find();
};

export const deleteEvent = (id: string) => {
  return Event.findByIdAndDelete(id);
};

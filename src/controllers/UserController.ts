import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const register = async (req: Request, res: Response) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ type: 'Validation error', errors: [{ resource: error.details[0].path[0], message: error.details[0].message }] });
  }

  const { username, password, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, email });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Error registering user', error: 'Internal Server Error' });
  }
};

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ statusCode: 404, message: 'User not found', error: 'Not Found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ statusCode: 400, message: 'Invalid credentials', error: 'Bad Request' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Error logging in', error: 'Internal Server Error' });
  }
};

export { register, login };

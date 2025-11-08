import User from '../../../models/User';
import dbConnect from '../../../lib/mongodb';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  
  await dbConnect();
  const { name, email, password } = req.body;
  
  try {
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      // Login
      const isValid = await bcrypt.compare(password, existingUser.password);
      if (!isValid) return res.status(401).json({ error: 'Invalid credentials' });
      res.json({ success: true, userId: existingUser._id, name: existingUser.name });
    } else {
      // Register
      if (!name) return res.status(400).json({ error: 'Name required for registration' });
      const user = await User.create({ name, email, password });
      res.status(201).json({ success: true, userId: user._id, name: user.name });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
import Category from '../../../models/Category';
import dbConnect from '../../../lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse)  {
  await dbConnect();
  
  if (req.method === 'GET') {
    const categories = await Category.find({ userId: req.userId });
    res.json(categories);
  }
  
  if (req.method === 'POST') {
    const category = await Category.create({ ...req.body, userId: req.userId });
    res.status(201).json(category);
  }
}
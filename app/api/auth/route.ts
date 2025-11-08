// import User from '../../../models/User';
// import dbConnect from '../../../lib/mongodb';
// import bcrypt from 'bcryptjs';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') return res.status(405).end();
  
//   await dbConnect();
//   const { name, email, password } = req.body;
//   console.log('Request body:', { name, email, password: '***' });
  
//   try {
//     const existingUser = await User.findOne({ email });
//     console.log('Existing user found:', !!existingUser);
    
//     if (existingUser) {
//       const isValid = await bcrypt.compare(password, existingUser.password);
//       if (!isValid) return res.status(401).json({ error: 'Invalid credentials' });
//       res.json({ success: true, userId: existingUser._id, name: existingUser.name });
//     } else {
//         console.log('Creating new user');
//       if (!name) return res.status(400).json({ error: 'Name required for registration' });
//       const user = await User.create({ name, email, password });
//       console.log('User created:', user._id); 
//       res.status(201).json({ success: true, userId: user._id, name: user.name });
//     }
//   } catch (error: any) {
//     res.status(400).json({ error: error.message });
//   }
// }


import User from '../../../models/User';
import dbConnect from '../../../lib/mongodb';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  await dbConnect();
  const { name, email, password } = await request.json();
  
  try {
    const existingUser = await User.findOne({ email });
    console.log(existingUser)
    
    if (existingUser) {
      console.log('user login');
      const isValid = await bcrypt.compare(password, existingUser.password);
      if (!isValid) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
      return NextResponse.json({ success: true, userId: existingUser._id, name: existingUser.name });
    } else {
      console.log('Creating new user');
      if (!name) return NextResponse.json({ error: 'Name required for registration' }, { status: 400 });
      const user = await User.create({ name, email, password });
      return NextResponse.json({ success: true, userId: user._id, name: user.name }, { status: 201 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
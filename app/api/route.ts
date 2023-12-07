import { connectDB } from '@/util/database';

export async function GET() {
  try {
    const db = (await connectDB).db('test');
    const blogs = await db.collection('blogs').find().toArray();
    return Response.json(blogs);
  } catch (e) {
    console.log(e);
  }
}

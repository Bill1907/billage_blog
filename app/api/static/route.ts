import { NextResponse } from 'next/server';
import { connectDB } from '@/util/database';

export async function GET() {
  const db = (await connectDB).db('test');
  const blogs = await db.collection('blogs').find().toArray();
  const tags = blogs.map((blog) => blog.tags).flat();
  const tagCounts = tags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  const formattedTags = Object.entries(tagCounts).map(([tag, count]) => ({
    name: tag,
    count,
  }));
  return NextResponse.json(formattedTags);
}

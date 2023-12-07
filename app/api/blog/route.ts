import { NextResponse } from 'next/server';
import { connectDB } from '@/util/database';
import { Blog } from '@/types/blog';

export async function GET() {}

// create a new blog
export async function POST(request: Request) {
  const { title, tags, content } = await request.json();

  const newBlog: Blog = {
    title,
    tags,
    content,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const db = (await connectDB).db('test');
  await db.collection<Blog>('blogs').insertOne(newBlog);

  return NextResponse.redirect('/');
}

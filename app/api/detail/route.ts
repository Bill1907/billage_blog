import { NextResponse, type NextRequest } from 'next/server';
import { ObjectId } from 'mongodb';
import { connectDB } from '@/util/database';

export async function GET(id: string) {
  const db = (await connectDB).db('test');
  const result = await db
    .collection('blogs')
    .findOne({ _id: new ObjectId(id || '') });
  return NextResponse.json(result);
}

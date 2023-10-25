import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/connet-db'
import { BlogModel } from '@/models/blog'

export async function GET(request: NextRequest) {
  const result = request.nextUrl.searchParams
  const page = Number(result.get('page')) || 1
  const limit = Number(result.get('limit')) || 10

  await connectDB()
  const blogList = await BlogModel.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .exec()
  return NextResponse.json({ blogList })
}

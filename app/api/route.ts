import { connectDB } from '@/util/database'

export async function GET() {
    try {
        const db = (await connectDB).db('test')
        const blogs = await db.collection('blogs').find().toArray()
        return Response.json(blogs)
    } catch (e) {
        console.log(e)
    }
}

export async function POST() {
    try {
        const db = (await connectDB).db('test')
        const result = await db.collection('blogs').insertOne({
        title: 'Hello World',
        content: 'This is my first blog'
        })
        return Response.json(result)
    } catch (e) {
        console.log(e)
    }
}
import { NextResponse } from "next/server";
import connectDB from "@/lib/connet-db";
import { BlogModel } from "@/models/blog";

export async function GET(request: Request) {
    await connectDB();
    const result = await BlogModel.find().exec()
    return NextResponse.json({ message: result })
}

export async function POST(request: Request) {
    try {
        await connectDB();
        const { content } = await request.json()

        let docs = new BlogModel({
            title: 'Blog Title',
            tags: ['tag1', 'tag2'],
            content
        })

        await docs.save()

        const list = await BlogModel.find().exec()

        return NextResponse.json({ data: list })
    }
    catch (e) {
        return NextResponse.json({ message: e })
    }
}
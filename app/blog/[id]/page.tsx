import { MDXRemote } from 'next-mdx-remote/rsc'
import { Blog } from "@/types/blog";

export default async function Page({ params }: { params: { id: string } }) {
    return (
        <div>
            <span>
                hello world {params.id}
            </span>
            <div>
                {message.map((el:Blog) => (
                   <MDXRemote source={el.content} />
                ))}
            </div>
        </div>
    )
}
import { Blog } from "@/types/blog";

export default async function Page({ params }: { params: { id: string } }) {
    const { message } = await fetch('http://localhost:3000/api/blog').then(res => res.json())

    return (
        <div>
            <span>
                hello world {params.id}
            </span>
            <div>
                {message.map((el:Blog) => (
                    <div key={el._id}>
                        <div>{el._id}</div>
                        <div>{el.content}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Blog } from '@/types/blog'

const getBlogList = async () => {
  const res = await import("@/app/api/route");
  return await (await res.GET()).json();
}

export default async function BlogCardList() {
  const blogList = await getBlogList()
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <div>
        {blogList.map((el: Blog) => (
          <div key={el._id}>
            <MDXRemote source={el.content} />
          </div>
        ))}
      </div>
    </div>
  )
}

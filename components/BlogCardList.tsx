import { MDXRemote } from 'next-mdx-remote/rsc'
import { Blog } from '@/types/blog.type'

export default async function BlogCardList() {
  const { blogList } = await fetch(
    `http://localhost:3000/api/blog/list?page=${1}&limit=${10}`,
    { cache: 'no-store' },
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err)
      return { blogList: [] }
    })

  console.log(blogList)
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

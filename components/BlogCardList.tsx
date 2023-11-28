import BlogCard from '@/components/BlogCard'
import { Blog } from '@/types/blog'

const getBlogList = async () => {
  const res = await import('@/app/api/route')
  return await (await res.GET())?.json()
}

export default async function BlogCardList() {
  const blogList = await getBlogList()
  return (
    <div className="flex flex-col items-center justify-between">
      {blogList.map((el: Blog) => (
        <BlogCard blog={el} key={el._id} />
      ))}
    </div>
  )
}

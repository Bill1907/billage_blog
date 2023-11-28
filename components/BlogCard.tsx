import { Blog } from '@/types/blog'

interface BlogCardProps {
  blog: Blog
}

export default async function BlogCard({ blog }: BlogCardProps) {
  return <div className="w-full min-h-30 relative">{blog.title}</div>
}

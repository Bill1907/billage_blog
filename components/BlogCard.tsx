import { Blog } from '@/types/blog';
import Link from 'next/link';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const fotmatDate = (date: Date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  };

  return (
    <div className="w-full min-h-30 relative flex flex-col gap-6 my-4">
      <Link href={`/blog/${blog._id}`}>
        <span className="text-xl font-medium">{blog.title}</span>
      </Link>
      <div className="flex justify-between">
        <div>
          {blog.tags.map((tag, index) => (
            <span
              className="bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer hover:bg-gray-400"
              key={`tag_${index}`}
            >
              #{tag}
            </span>
          ))}
        </div>
        {blog.updatedAt && <span>{fotmatDate(blog.updatedAt)}</span>}
      </div>
    </div>
  );
}

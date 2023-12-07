import BlogCard from '@/components/BlogCard';
import { Blog } from '@/types/blog';

const getBlogList = async () => {
  const res = await import('@/app/api/route');
  return await (await res.GET())?.json();
};

export default async function BlogCardList() {
  const blogList = await getBlogList();
  return (
    <div className="flex flex-col items-center justify-between gap-6">
      {blogList.map((el: Blog, index: number) => (
        <div className="relatie w-full">
          <div
            className={` relative h-[1px] bg-gradient-to-r from-black via-gray-400 to-black`}
            key={el._id}
          />
          <BlogCard blog={el} />
        </div>
      ))}
    </div>
  );
}

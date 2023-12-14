import { headers } from 'next/headers';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { Blog } from '@/types/blog';

const fetchBlog = async (id: string) => {
  const res = await import('@/app/api/detail/route');
  return await (await res.GET(id))?.json();
};

export default async function Page({ params }: { params: { id: string } }) {
  const blog = await fetchBlog(params.id);

  return (
    <div className="max-w-5xl m-auto">
      <MDXRemote source={blog.content} />
    </div>
  );
}

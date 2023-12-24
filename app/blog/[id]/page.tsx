import { headers } from 'next/headers';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { Blog } from '@/types/blog';
import Link from 'next/link';

const fetchBlog = async (id: string) => {
  const res = await import('@/app/api/detail/route');
  return await (await res.GET(id))?.json();
};

const components = {
  h1: (props: any) => (
    <h1 className="text-yellow-500 font-bold text-4xl" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-green-500 font-bold text-3xl" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-blue-500 font-bold text-2xl" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-800 text-white p-2 rounded" {...props} />
  ),
  // code: (props: any) => (
  //   <code className="bg-gray-800 text-white p-1 rounded" {...props} />
  // ),
  hr: (props: any) => <hr className="my-4" {...props} />,
  ul: (props: any) => <ul className="list-disc ml-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal ml-4" {...props} />,
  li: (props: any) => <li className="mb-1" {...props} />,
  p: (props: any) => <p className="text-lg leading-7" {...props} />,
  a: (props: any) => (
    <Link href={props.href}>
      <a className="text-blue-500 hover:underline" {...props} />
    </Link>
  ),
  img: (props: any) => (
    <img className="max-w-full" alt={props.alt || ''} {...props} />
  ),
};

export default async function Page({ params }: { params: { id: string } }) {
  const blog = await fetchBlog(params.id);

  return (
    <div className="max-w-5xl m-auto">
      <h1 className="text-5xl font-bold">{blog.title}</h1>
      <MDXRemote source={blog.content} components={components} />
    </div>
  );
}

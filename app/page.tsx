import BlogCardList from '@/components/BlogCardList';
import StaticTags from '@/components/StaticTags';

export default async function Home() {
  return (
    <main className="w-full">
      <section>
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center h-96">
          <h1 className="text-5xl font-bold">Welcome to my blog</h1>
          <p className="text-2xl mt-4">
            This is a blog where I write about things I learn.
          </p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto flex flex-col items-center justify-center h-96">
        <StaticTags />
      </section>
      <section className="max-w-5xl mx-auto">
        <BlogCardList />
      </section>
    </main>
  );
}

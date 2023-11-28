import BlogCardList from '@/components/BlogCardList'

export default async function Home() {
  return (
    <main className="w-full">
      <section className='max-w-5xl mx-auto'>
        <BlogCardList />
      </section>
    </main>
  )
}

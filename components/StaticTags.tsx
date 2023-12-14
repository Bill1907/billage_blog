const fetchStaticTags = async () => {
  const res = await import('@/app/api/static/route');
  return await (await res.GET())?.json();
};

export default async function StaticTags() {
  const staticTags = await fetchStaticTags();
  return (
    <div className="max-w-5xl flex flex-row flex-wrap gap-4 select-none">
      {staticTags.map((tagInfo: { name: string; count: number }) => (
        <div className="py-2 px-4 bg-gradient-to-r from-gray-500 to-gray-800 rounded-2xl flex flex-wrap gap-2 cursor-pointer ">
          <span className="text-lg"># {tagInfo.name}</span>
        </div>
      ))}
    </div>
  );
}

import { wisp } from "@/lib/wisp";
import { LastsPost } from "@/components/SectionsComponents/LastPosts";

const LastPostsBlog = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const result = await wisp.getPosts({ limit: 6 });
  const filteredPosts = searchParams.tag
    ? result.posts.filter((post) => post.tags.some(tag => tag.name === searchParams.tag))
    : result.posts;

  return (
    <section id='portfolio' className='section'>
      <h1 className="text-center cursor-default text-3xl md:text-4xl font-bold tracking-tighter leading-tight py-12">
        Recent Posts
      </h1>
      <LastsPost posts={filteredPosts} />
    </section>
  );
};

export default LastPostsBlog;

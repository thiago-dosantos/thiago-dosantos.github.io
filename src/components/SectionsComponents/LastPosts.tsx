"use client";
import { cn } from "@/lib/utils"; 
import { GetPostsResult } from "@/lib/wisp"; 
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

export const LastPost: FunctionComponent<{
  post: GetPostsResult["posts"][0];
}> = ({ post }) => {
  return (
    <div className="group break-words border overflow-hidden shadow-lg rounded-lg">
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-[16/9] relative group-hover:brightness-75 transition-all">
          <Image
            alt={post.title}
            className="object-cover"
            src={post.image || "/images/placeholder.webp"}
            fill
          />
        </div>
      </Link>
      <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4 p-4">
        <div className="cursor-default italic tracking-tighter text-xs text-[#F63D3C]">
          {formatDate(post.publishedAt || post.updatedAt, "dd MMM yyyy")}
        </div>
        <h2 className="font-sans font-semibold tracking-tighter text-primary text-lg">
          <Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
        </h2>
        
        <div className="text-base leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
          {post.description}
        </div>
        <div className="text-sm text-muted-foreground">
          {post.tags.map((tag) => (
            <div key={tag.id} className="mr-2 inline-block">
              <Link href={`/tag/${tag.name}`}>#{tag.name}</Link>
            </div>
          ))}
        </div>
        <button className="p-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline p-2 rounded-lg">Read More</Link>
        </button>
      </div>
    </div>
  );
};

export const LastsPost: FunctionComponent<{
  posts: GetPostsResult["posts"];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <div
      className={cn(
        "container gap-24 grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8",
        className
      )}
    >
      {posts.slice(0, 3).map((post) => (
        <LastPost key={post.id} post={post} />
      ))}
    </div>
  );
};

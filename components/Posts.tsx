"use client";

import useSWR from "swr";
// import { usePosts } from "@/store";
// import { shallow } from "zustand/shallow";
// import { useEffect } from "react";
import Link from "next/link";
import { getAllPosts } from "@/services/getPosts";

const Posts = () => {
  const { data: posts, isLoading: loading } = useSWR("posts", getAllPosts);
  // const [posts, loading, getAllPosts] = usePosts(
  //   (state) => [state.posts, state.loading, state.getAllPosts],
  //   shallow
  // );

  // useEffect(() => {
  //   getAllPosts();
  // }, [getAllPosts]);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => {
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export { Posts };

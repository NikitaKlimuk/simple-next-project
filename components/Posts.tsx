import Link from "next/link";

type Props = {
  posts: any[];
};

const Posts = ({ posts }: Props) => {
  return (
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

import { json } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Donate() {
  return (
    <main>
      <h1>Posts</h1>
      <Link to="Donate" className="text-red-600 underline">
        Donate
      </Link>
    </main>
  );
}

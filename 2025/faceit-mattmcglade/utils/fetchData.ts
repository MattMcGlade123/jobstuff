import { Post } from "@/custom-type";
import { authors } from "@/mock-data/mock-auths";

export const fetchData = async (pageNumber = 1) => {
  let dataResponse;
  let error;
  const limit = 20;
  const skip = (pageNumber - 1) * limit;

  try {
    const response = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    const getRandomAuthor = () => authors[Math.floor(Math.random() * authors.length)];

    const updatedPosts = data.posts.map((post: Post) => ({
      ...post,
      thisPostCappedText: post?.body?.length > 100 ? post.body.slice(0, 100) + "..." : post?.body,
      author: getRandomAuthor()
    }));

    dataResponse = updatedPosts;
    // Errors need to be set to any
  } catch (err: any) {
    error = err?.message || err;
    console.error("Error fetching recipes:", err);
  }
  return { dataResponse, error };
};
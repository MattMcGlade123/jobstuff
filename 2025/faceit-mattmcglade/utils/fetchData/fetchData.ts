import { Post } from "@/custom-type";
import { authors } from "@/mock-data/mock-auths";

interface FetchReturnData {
  dataResponse: Post[];
  error: any
}

/**
 * This function takes a pageNumber (defaults to 1 if not provided)
 * It then sets the limit and the skip level to fetch page 2 or 3 etc
 * It then tries to fetch the data. If there's an error it throws an error
 * As the mock data doesn't contain an author, I've add mock data that randomly
 * assigns an author to a post
 */
export const fetchData = async (pageNumber = 1): Promise<FetchReturnData> => {
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
    console.error("Error fetching data:", err);
  }
  return { dataResponse, error };
};
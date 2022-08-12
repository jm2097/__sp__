import { PostService } from "./05-dependency-b";
import { WebApiProvider } from "./05-dependency-c";

// Main
(async () => {
  const provider = new WebApiProvider();
  const postService = new PostService(provider);

  const posts = await postService.getPosts();
  console.log({ posts });
})();

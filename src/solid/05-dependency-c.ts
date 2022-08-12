import localPosts from "../data/local-db.json";
import { Post } from "./05-dependency-b";

export abstract class DataProvider {
  abstract getPosts(): Promise<Post[]>;
}

export class LocalProvider extends DataProvider {
  getPosts(): Promise<Post[]> {
    return Promise.resolve([
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
      },
    ]);
  }
}

export class FileProvider extends DataProvider {
  getPosts(): Promise<Post[]> {
    return Promise.resolve(localPosts);
  }
}

export class WebApiProvider extends DataProvider {
  async getPosts(): Promise<Post[]> {
    return (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json() as Promise<Post[]>;
  }
}

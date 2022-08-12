import { DataProvider } from "./05-dependency-c";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  constructor(private dataProvider: DataProvider) {}

  async getPosts(): Promise<Post[]> {
    return await this.dataProvider.getPosts();
  }
}

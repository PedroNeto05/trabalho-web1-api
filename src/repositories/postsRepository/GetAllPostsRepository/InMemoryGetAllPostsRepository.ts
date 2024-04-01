import { Post } from '../../../entities/Post';
import { IGetAllPostsRepository } from './IGetAllPostsRepository';

export class InMemoryGetAllPostsRepository implements IGetAllPostsRepository {
  constructor(private readonly inMemoryDataBase: Post[]) {}

  async getAllPosts(): Promise<Post[]> {
    return await this.inMemoryDataBase;
  }
}

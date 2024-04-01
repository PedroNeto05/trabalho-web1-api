import { Post } from '../../../entities/Post';
import { IGetPostByIdRepository } from './IGetPostByIdRepository';

export class InMemoryGetPostByIdRepository implements IGetPostByIdRepository {
  constructor(private readonly inMemoryDataBase: Post[]) {}

  async getById(id: string): Promise<Post | null> {
    const postExists = await this.inMemoryDataBase.find(post => post.id === id);

    if (postExists) return postExists;

    return null;
  }
}

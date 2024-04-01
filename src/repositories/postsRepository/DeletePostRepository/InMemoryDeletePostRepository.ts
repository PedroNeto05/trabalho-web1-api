import { Post } from '../../../entities/Post';
import { IDeletePostRepository } from './IDeletePostRepository';

export class InMemoryDeletePostRepository implements IDeletePostRepository {
  constructor(private readonly inMemoryDataBase: Post[]) {}

  async delete(id: string): Promise<void> {
    await this.inMemoryDataBase.splice(
      this.inMemoryDataBase.findIndex(post => post.id === id),
      1,
    );
  }
}

import { Post } from '../../../entities/Post';
import { IGetPostByTitleRepository } from './IGetPostByTitleRepository';

export class InMemoryGetPostByTitleRepository
  implements IGetPostByTitleRepository
{
  constructor(private readonly inMemoryDataBase: Post[]) {}

  async findByTitle(title: string): Promise<Post | null> {
    const postExists = await this.inMemoryDataBase.find(
      post => post.title.toLocaleLowerCase() === title.toLocaleLowerCase(),
    );

    if (postExists) return postExists;

    return null;
  }
}

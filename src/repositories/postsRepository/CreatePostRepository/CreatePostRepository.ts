import { Post } from '../../../entities/Post';
import { ICreatePostParams } from '../../../useCase/postsUseCase/CreatePostUseCase/ICreatePostUseCase';
import { ICreatePostRepository } from './ICreatePostRepository';

export class CreatePostRepository implements ICreatePostRepository {
  constructor(private readonly inMemoryDataBase: Post[]) {}

  save({ body, title }: ICreatePostParams): Post {
    const id = crypto.randomUUID();
    const post = new Post(id, title, body);
    return post;
  }

  async create(post: Post): Promise<null> {
    await this.inMemoryDataBase.push(post);
    return null;
  }
}

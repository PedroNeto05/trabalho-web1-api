import { Post } from '../../../entities/Post';
import { IUpdatePostParams } from '../../../useCase/postsUseCase/UpdatePostUseCase/IUpdatePostUseCase';
import { IUpdatePostRepository } from './IUpdatePostRepository';

export class InMemoryUpdatePostRepository implements IUpdatePostRepository {
  constructor(private readonly inMemoryDataBase: Post[]) {}

  async updatePost({ title, body, id }: IUpdatePostParams): Promise<void> {
    const updatedPost = await this.inMemoryDataBase.find(
      post => post.id === id,
    );

    if (title) {
      updatedPost.title = title;
    }

    if (body) {
      updatedPost.body = body;
    }
  }
}

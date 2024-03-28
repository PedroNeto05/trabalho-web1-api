import { Post } from '../../../entities/Post';
import { IGetAllPostsRepository } from '../../../repositories/postsRepository/GetAllPostsRepository/IGetAllPostsRepository';
import { IGetAllPostsUseCase } from './IGetAllPostsUseCase';

export class GetPostsUseCase implements IGetAllPostsUseCase {
  constructor(private readonly getPostsRepository: IGetAllPostsRepository) {}

  async execute(): Promise<Post[]> {
    const posts = await this.getPostsRepository.getAllPosts();
    return posts;
  }
}

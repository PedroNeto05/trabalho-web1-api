import { ICreatePostRepository } from '../../../repositories/postsRepository/CreatePostRepository/ICreatePostRepository';
import { IGetPostByTitleRepository } from '../../../repositories/postsRepository/GetPostByTitleRepository/IGetPostByTitleRepository';
import { ICreatePostParams, ICreatePostUseCase } from './ICreatePostUseCase';

export class CreatePostUseCase implements ICreatePostUseCase {
  constructor(
    private readonly createPostRepository: ICreatePostRepository,
    private readonly getPostById: IGetPostByTitleRepository,
  ) {}

  async execute({ body, title }: ICreatePostParams): Promise<void> {
    const postExists = await this.getPostById.findByTitle(title);

    if (postExists) {
      throw new Error('Post already exists');
    }

    const post = this.createPostRepository.save({ body, title });

    await this.createPostRepository.create(post);
  }
}

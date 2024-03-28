import { IGetPostByTitleRepository } from '../../../repositories/postsRepository/GetPostByTitleRepository/IGetPostByTitleRepository';
import { IUpdatePostRepository } from '../../../repositories/postsRepository/UpdatePostRepository/IUpdatePostRepository';
import { IUpdatePostParams, IUpdatePostUseCase } from './IUpdatePostUseCase';

export class UpdatePostUseCase implements IUpdatePostUseCase {
  constructor(
    private readonly updatePostRepository: IUpdatePostRepository,
    private readonly getPostByTitle: IGetPostByTitleRepository,
  ) {}

  async execute({ title, body }: IUpdatePostParams): Promise<void> {
    const postExists = await this.getPostByTitle.findByTitle(title);

    if (postExists) {
      throw new Error('Post already exists');
    }

    await this.updatePostRepository.updatePost({ title, body });
  }
}

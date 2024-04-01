import { IGetPostByIdRepository } from '../../../repositories/postsRepository/GetPostByIdRepository/IGetPostByIdRepository';
import { IUpdatePostRepository } from '../../../repositories/postsRepository/UpdatePostRepository/IUpdatePostRepository';
import { IUpdatePostParams, IUpdatePostUseCase } from './IUpdatePostUseCase';

export class UpdatePostUseCase implements IUpdatePostUseCase {
  constructor(
    private readonly updatePostRepository: IUpdatePostRepository,
    private readonly getPostByIdRepository: IGetPostByIdRepository,
  ) {}

  async execute({ title, body, id }: IUpdatePostParams): Promise<void> {
    const postExists = await this.getPostByIdRepository.getById(id);

    if (postExists) {
      throw new Error('Post already exists');
    }

    await this.updatePostRepository.updatePost({ title, body, id });
  }
}

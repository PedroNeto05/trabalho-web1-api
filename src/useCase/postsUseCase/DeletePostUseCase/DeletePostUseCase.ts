import { IDeletePostRepository } from '../../../repositories/postsRepository/DeletePostRepository/IDeletePostRepository';
import { IGetPostByIdRepository } from '../../../repositories/postsRepository/GetPostByIdRepository/IGetPostByIdRepository';
import { IDeletePostUseCase } from './IDeletePostUseCase';

export class DeletePostUseCase implements IDeletePostUseCase {
  constructor(
    private readonly deletePostRepository: IDeletePostRepository,
    private readonly getPostByIdRepository: IGetPostByIdRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const postExists = await this.getPostByIdRepository.getById(id);

    if (!postExists) {
      throw new Error('Post does not exists');
    }

    await this.deletePostRepository.delete(id);
  }
}

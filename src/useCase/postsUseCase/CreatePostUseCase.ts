import { ICreatePostRepository } from '../../repositories/postsRepository/CreatePostRepository/ICreatePostRepository';
import { IGetPostByIdRepository } from '../../repositories/postsRepository/GetPostByIdRepository/IGetPostByIdRepository';
import { ICreatePostParams, ICreatePostUseCase } from './ICreatePostUseCase';

export class CreatePostUseCase implements ICreatePostUseCase {
  constructor(
    private readonly createPostRepository: ICreatePostRepository,
    private readonly getPostById: IGetPostByIdRepository,
  ) {}

  execute({ body, title }: ICreatePostParams): Promise<void> {}
}

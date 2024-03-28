import { Post } from '../../../entities/Post';
import { ICreatePostParams } from '../../../useCase/postsUseCase/ICreatePostUseCase';

export interface ICreatePostRepository {
  save(createPostParams: ICreatePostParams): Promise<void>;
  create(createPostParams: ICreatePostParams): Promise<Post>;
}

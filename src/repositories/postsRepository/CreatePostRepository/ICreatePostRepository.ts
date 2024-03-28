import { Post } from '../../../entities/Post';
import { ICreatePostParams } from '../../../useCase/postsUseCase/CreatePostUseCase/ICreatePostUseCase';

export interface ICreatePostRepository {
  save(createPostParams: ICreatePostParams): Post;
  create(createPostParams: ICreatePostParams): Promise<Post>;
}

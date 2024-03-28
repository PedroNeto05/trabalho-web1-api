import { Post } from '../../../entities/Post';

export interface IGetAllPostsUseCase {
  execute(): Promise<Post[]>;
}

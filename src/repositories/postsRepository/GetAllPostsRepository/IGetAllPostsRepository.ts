import { Post } from '../../../entities/Post';

export interface IGetAllPostsRepository {
  getAllPosts(): Promise<Post[]>;
}

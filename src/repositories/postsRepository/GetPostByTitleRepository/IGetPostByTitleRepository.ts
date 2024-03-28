import { Post } from '../../../entities/Post';

export interface IGetPostByTitleRepository {
  findByTitle(title: string): Promise<Post | null>;
}

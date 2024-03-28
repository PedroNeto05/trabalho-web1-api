import { Post } from '../../../entities/Post';

export interface IGetPostByIdRepository {
  findById(id: string): Promise<Post | null>;
}

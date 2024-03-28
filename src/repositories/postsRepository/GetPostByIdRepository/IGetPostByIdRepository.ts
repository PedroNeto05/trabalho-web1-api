import { Post } from '../../../entities/Post';

export interface IGetPostByIdRepository {
  getById(id: string): Promise<Post | null>;
}

import { IUpdatePostParams } from '../../../useCase/postsUseCase/UpdatePostUseCase/IUpdatePostUseCase';

export interface IUpdatePostRepository {
  updatePost(updatePostParams: IUpdatePostParams): Promise<void>;
}

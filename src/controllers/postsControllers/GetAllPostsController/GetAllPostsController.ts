import { Request, Response } from 'express';
import { IGetAllPostsUseCase } from '../../../useCase/postsUseCase/GetAllPostsUseCase/IGetAllPostsUseCase';

export class GetAllPostsController {
  constructor(private readonly getAllPostsUseCase: IGetAllPostsUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const posts = await this.getAllPostsUseCase.execute();
      return res.status(200).json(posts);
    } catch (error) {
      const err = error as Error;

      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}

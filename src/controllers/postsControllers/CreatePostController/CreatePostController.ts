import { Request, Response } from 'express';
import { ICreatePostUseCase } from '../../../useCase/postsUseCase/CreatePostUseCase/ICreatePostUseCase';

export class CreatePostController {
  constructor(private readonly createPostUseCase: ICreatePostUseCase) {}

  async handle(req: Request, res: Response) {
    const { title, body } = req.body;

    if (!title || !body) {
      return res.status(400).json({
        message: 'All fields required',
      });
    }

    try {
      await this.createPostUseCase.execute({ title, body });
      return res.status(200).json();
    } catch (error) {
      const err = error as Error;

      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}

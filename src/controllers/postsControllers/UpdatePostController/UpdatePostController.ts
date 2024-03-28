import { Request, Response } from 'express';
import { IUpdatePostUseCase } from '../../../useCase/postsUseCase/UpdatePostUseCase/IUpdatePostUseCase';

export class UpdatePostController {
  constructor(private readonly updatePostUseCase: IUpdatePostUseCase) {}

  async handle(req: Request, res: Response) {
    const { title, body } = req.body;

    if (!title || !body) {
      return res.status(400).json({
        message: 'All fields required',
      });
    }

    try {
      await this.updatePostUseCase.execute({ title, body });
      return res.status(200);
    } catch (error) {
      const err = error as Error;

      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
